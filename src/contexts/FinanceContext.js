import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    try { const s = localStorage.getItem('mf_transactions'); return s ? JSON.parse(s) : []; } catch { return []; }
  });

  const [accounts, setAccounts] = useState(() => {
    try { const s = localStorage.getItem('mf_accounts'); return s ? JSON.parse(s) : [{ id: 'wallet', name: 'Carteira', balance: 0 }]; } catch { return [{ id: 'wallet', name: 'Carteira', balance: 0 }]; }
  });

  useEffect(() => { try { localStorage.setItem('mf_transactions', JSON.stringify(transactions)); } catch {} }, [transactions]);
  useEffect(() => { try { localStorage.setItem('mf_accounts', JSON.stringify(accounts)); } catch {} }, [accounts]);

  function addTransaction({ type = 'expense', amount = 0, date = new Date().toISOString(), category = 'Geral', accountId = accounts[0]?.id || 'wallet', note = '' }) {
    const t = { id: uuidv4(), type, amount: Number(amount), date, category, accountId, note };
    setTransactions(p => [t, ...p]);
    // adjust account balance simple
    setAccounts(p => p.map(a => a.id === accountId ? { ...a, balance: a.balance + (type === 'income' ? Number(amount) : -Number(amount)) } : a));
    return t;
  }

  function removeTransaction(id){
    const tx = transactions.find(t=>t.id===id);
    if(tx){
      setAccounts(p => p.map(a => a.id === tx.accountId ? { ...a, balance: a.balance + (tx.type === 'income' ? -tx.amount : tx.amount) } : a));
    }
    setTransactions(p => p.filter(t => t.id !== id));
  }

  // Adicionar conta
  function addAccount({ name, initialBalance = 0 }){
    const acc = { id: uuidv4(), name, balance: Number(initialBalance) };
    setAccounts(p => [acc, ...p]);
    return acc;
  }

  // Atualizar campos da conta
  function updateAccount(id, patch){
    setAccounts(p => p.map(a => a.id === id ? { ...a, ...patch } : a));
  }

  // Setar o saldo da conta diretamente
  function setAccountBalance(id, newBalance){
    setAccounts(p => p.map(a => a.id === id ? { ...a, balance: Number(newBalance) } : a));
  }

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction, removeTransaction, accounts, addAccount, updateAccount, setAccountBalance, setAccounts }}>
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance(){ const ctx = useContext(FinanceContext); if(!ctx) throw new Error('useFinance must be inside FinanceProvider'); return ctx; }

export default FinanceContext;

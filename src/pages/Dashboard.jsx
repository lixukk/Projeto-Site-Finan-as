import React from 'react';
import { useFinance } from '../contexts/FinanceContext';

export default function Dashboard(){
  const { transactions, accounts } = useFinance();
  const totalIncome = transactions.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);
  const totalExpense = transactions.filter(t=>t.type!=='income').reduce((s,t)=>s+t.amount,0);
  const balance = accounts.reduce((s,a)=>s+a.balance,0);
  return (
    <div className="container">
      <div className="header">
        <h2>Dashboard 👤</h2>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12}}>
        <div className="card">Receitas: R$ {totalIncome.toFixed(2)}</div>
        <div className="card">Despesas: R$ {totalExpense.toFixed(2)}</div>
        <div className="card">Saldo: R$ {balance.toFixed(2)}</div>
      </div>
    </div>
  );
}

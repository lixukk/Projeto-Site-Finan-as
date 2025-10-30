import React, { useState } from 'react';
import { useFinance } from '../contexts/FinanceContext';

export default function TransactionForm(){
  const { addTransaction, accounts } = useFinance();
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Geral');
  const [accountId, setAccountId] = useState(accounts[0]?.id || 'wallet');

  function onSubmit(e){
    e.preventDefault();
    if(!amount) return;
    addTransaction({ type, amount: parseFloat(amount), category, accountId, date: new Date().toISOString() });
    setAmount('');
  }

  return (
    <div className="container">
      <h2>Adicionar Transação</h2>
      <form onSubmit={onSubmit} className="card" style={{display:'grid',gap:8}}>
        <div>
          <label>Tipo:</label>
          <select value={type} onChange={e=>setType(e.target.value)}>
            <option value="expense">Despesa</option>
            <option value="income">Receita</option>
          </select>
        </div>
        <div>
          <label>Valor:</label><br/>
          <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="0.00" />
        </div>
        <div>
          <label>Categoria:</label><br/>
          <input value={category} onChange={e=>setCategory(e.target.value)} />
        </div>
        <div>
          <label>Conta:</label><br/>
          <select value={accountId} onChange={e=>setAccountId(e.target.value)}>
            {accounts.map(a=> <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
        </div>
        <div>
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  );
}

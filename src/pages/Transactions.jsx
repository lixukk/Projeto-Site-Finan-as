import React from 'react';
import { useFinance } from '../contexts/FinanceContext';

export default function Transactions(){
  const { transactions, removeTransaction } = useFinance();
  return (
    <div className="container">
      <h2>Transações 🔃</h2>
      <div style={{marginTop:12}}>
        {transactions.length===0 && <div className="card">Nenhuma transação</div>}
        {transactions.map(tx=> (
          <div key={tx.id} className="card" style={{marginBottom:8,display:'flex',justifyContent:'space-between'}}>
            <div>
              <strong>{tx.category}</strong> — R$ {tx.amount.toFixed(2)} <br/>
              <small>{new Date(tx.date).toLocaleString()}</small>
            </div>
            <div>
              <button onClick={()=>removeTransaction(tx.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

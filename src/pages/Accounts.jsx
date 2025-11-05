import React, { useState } from 'react';
import { useFinance } from '../contexts/FinanceContext';

export default function Accounts(){
  const { accounts, addAccount, updateAccount, setAccountBalance } = useFinance();
  const [newName, setNewName] = useState('');
  const [newBalance, setNewBalance] = useState('0');

  function onAdd(e){
    e.preventDefault();
    if(!newName) return;
    addAccount({ name: newName, initialBalance: Number(newBalance || 0) });
    setNewName(''); setNewBalance('0');
  }

  return (
    <div className="container">
      <h2>Contas 🧾</h2>
      <form onSubmit={onAdd} className="card" style={{display:'grid',gap:8,marginBottom:12}}>
        <div>
          <label>Nome da conta:</label><br/>
          <input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="Conta nova" />
        </div>
        <div>
          <label>Saldo inicial:</label><br/>
          <input value={newBalance} onChange={e=>setNewBalance(e.target.value)} />
        </div>
        <div>
          <button type="submit">Criar conta</button>
        </div>
      </form>

      {accounts.map(a=> (
        <div className="card" key={a.id} style={{marginBottom:8}}>
          <strong>{a.name}</strong>
          <div>Saldo: R$ {a.balance.toFixed(2)}</div>
          <div style={{marginTop:8}}>
            <label>Editar saldo:</label>
            <input type="number" defaultValue={a.balance} onBlur={e => setAccountBalance(a.id, e.target.value)} />
            <button onClick={() => updateAccount(a.id, { name: a.name + ' ' })}>Salvar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

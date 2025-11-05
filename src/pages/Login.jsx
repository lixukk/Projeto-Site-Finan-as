import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const { login } = useAuth();
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const nav = useNavigate();

  async function onSubmit(e){
    e.preventDefault();
    try{
      login({ cpf, name });
      nav('/');
    }catch(err){ setError(err.message); }
  }

  // if already logged, redirect to dashboard
  React.useEffect(() => {
    try{
      const u = JSON.parse(localStorage.getItem('mf_user'));
      if(u) nav('/');
    }catch{}
  }, [nav]);

  return (
    <div className="login-wrapper">
      <div className="login-card card">
        <h2>Entrar / Cadastrar</h2>
        <form onSubmit={onSubmit} className="" style={{display:'grid',gap:8}}>
        <div>
          <label>CPF (somente números):</label><br/>
          <input value={cpf} onChange={e=>setCpf(e.target.value)} placeholder="12345678901" />
        </div>
        <div>
          <label>Nome (opcional):</label><br/>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome" />
        </div>
        {error && <div style={{color:'red'}}>{error}</div>}
        <div>
          <button type="submit">Entrar</button>
        </div>
        </form>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Header(){
  const { user, logout } = useAuth();
  const {theme, toggle} = useTheme();
  return (
    <header className="header container $ {theme}">
      style= {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddings: '1rem 2rem',
        backgroundColor: theme === 'dark' ? '#222' : '#f0f0f0',
        color: theme === 'dark' ? '#fff' : '#000',
        transition: 'background 0.3s, color 0.3s',
      }}

      <h1>Minhas Finanças 💸</h1>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/transactions">Transações</Link> | <Link to="/add">Adicionar</Link> | <Link to="/budgets">Orçamentos</Link> | <Link to="/accounts">Contas</Link>
      </nav>

      

      <div style = {{display: 'flex', alignItems:'center', gap: '1rem'}}>

        <button
          onClick={toggle}
          style={{
            background: 'none',
            border: '2px solid currentColor',
            borderRadius: '8px',
            padding: '0.3rem 0.7rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
        >

        </button>
        {user ? (
          <span>Olá, {user.name || user.cpf}! <button onClick={() => logout()}>Sair</button></span>
        ) : (
          <Link to="/login">Entrar 🔑</Link>
        )}
      </div>
    </header>
  );
}

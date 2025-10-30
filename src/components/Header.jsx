import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Header(){
  const { user, logout } = useAuth();
  return (
    <header className="header container">
      <h1>Minhas Finanças</h1>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/transactions">Transações</Link> | <Link to="/add">Adicionar</Link> | <Link to="/budgets">Orçamentos</Link> | <Link to="/accounts">Contas</Link>
      </nav>
      <div>
        {user ? (
          <span>Olá {user.name || user.cpf} <button onClick={() => logout()}>Sair</button></span>
        ) : (
          <Link to="/login">Entrar</Link>
        )}
      </div>
    </header>
  );
}

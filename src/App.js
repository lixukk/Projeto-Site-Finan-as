import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import TransactionForm from './pages/TransactionForm';
import Budgets from './pages/Budgets';
import Accounts from './pages/Accounts';
import Settings from './pages/Settings';
import { ThemeProvider } from './contexts/ThemeContext';
import { FinanceProvider } from './contexts/FinanceContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import { useLocation } from 'react-router-dom';

function App(){
  return (
    <AuthProvider>
      <ThemeProvider>
        <FinanceProvider>
          <AppInner />
        </FinanceProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

function AppInner(){
  // Separa componentes para usar os hooks
  const { user } = useAuth();
  const loc = useLocation();

  return (
    <div>
      {user && loc.pathname !== '/login' && <Header />}
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<RequireAuth><Dashboard/></RequireAuth>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/add" element={<TransactionForm/>} />
        <Route path="/budgets" element={<Budgets/>} />
        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </div>
  );
}

export default App;

function RequireAuth({ children }){
  const { user } = useAuth();
  if(!user) return <Login />;
  return children;
}

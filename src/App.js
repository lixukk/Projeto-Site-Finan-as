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

function App(){
  return (
    <AuthProvider>
      <ThemeProvider>
        <FinanceProvider>
          <div>
            <Header />
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
        </FinanceProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

function RequireAuth({ children }){
  const { user } = useAuth();
  if(!user) return <Login />;
  return children;
}

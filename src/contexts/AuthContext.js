import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    try { const s = localStorage.getItem('mf_user'); return s ? JSON.parse(s) : null; } catch { return null; }
  });

  useEffect(() => { try { localStorage.setItem('mf_user', JSON.stringify(user)); } catch {} }, [user]);

  function login({ cpf, name }){
    // Validação CPF
    const normalized = String(cpf).replace(/\D/g, '');
    if(!normalized || normalized.length < 11) throw new Error('CPF inválido');
    const newUser = { cpf: normalized, name: name || null, createdAt: new Date().toISOString() };
    setUser(newUser);
    return newUser;
  }

  function logout(){ setUser(null); }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){ const ctx = useContext(AuthContext); if(!ctx) throw new Error('useAuth must be used within AuthProvider'); return ctx; }

export default AuthContext;

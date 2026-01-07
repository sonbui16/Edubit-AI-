
import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

type Screen = 'login' | 'dashboard';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [user, setUser] = useState<{ email: string; school: string } | null>(null);

  const handleLoginSuccess = (email: string, school: string) => {
    setUser({ email, school });
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('login');
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'login' ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;

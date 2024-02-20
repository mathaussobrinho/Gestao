// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.js';
import Cadastro from './components/Cadastro.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica para lidar com o login...
    // Se o login for bem-sucedido, defina isLoggedIn como true
    setIsLoggedIn(true);
  };

  const handleCadastroSuccess = () => {
    // Lógica para lidar com o sucesso do cadastro...
    // Aqui você pode redirecionar o usuário ou fazer outras ações necessárias
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página de login */}
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/cadastro" /> : <Login onLogin={handleLogin} />}
          />

          {/* Página de cadastro */}
          <Route
            path="/cadastro"
            element={<Cadastro onCadastroSuccess={handleCadastroSuccess} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

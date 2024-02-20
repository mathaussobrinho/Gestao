// components/Cadastro.js
import React from 'react';

const Cadastro = ({ onCadastroSuccess }) => {
  const handleCadastro = () => {
    // Lógica para lidar com o cadastro...
    // Após o cadastro ser concluído com sucesso, chame a função onCadastroSuccess
    onCadastroSuccess();
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastrar</h2>
      <form onSubmit={handleCadastro}>
        {/* Campos do formulário */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;

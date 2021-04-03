import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('clicou')
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo Sistema" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="pasasword" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">Já possui uma conta?</Link>

      </div>
    </div>
  )
}

export default SignUp;
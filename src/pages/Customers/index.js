
import Title from '../../components/Title';
import Header from '../../components/Header';
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';

export default function Customers() {
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereço, setEndereço] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    alert('Teste')
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Nome Fantasia</label>
            <input type="text" value={nomeFantasia} placeholder="Nome da sua empresa" onChange={(e) => setNomeFantasia(e.target.value)} />

            <label>CNPJ</label>
            <input type="text" value={cnpj} placeholder="Seu CNPJ" onChange={(e) => setCnpj(e.target.value)} />

            <label>Endereço</label>
            <input type="text" value={endereço} placeholder="Endereço da empresa" onChange={(e) => setEndereço(e.target.value)} />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
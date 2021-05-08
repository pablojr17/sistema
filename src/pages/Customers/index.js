
import Title from '../../components/Title';
import Header from '../../components/Header';
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';
import firebase from '../../service/firebaseConnection';
import { toast } from 'react-toastify';

export default function Customers() {
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereço, setEndereço] = useState('');

  async function handleAdd(e) {
    e.preventDefault();

    if (nomeFantasia !== '' && cnpj !== '' && endereço !== '') {
      await firebase.firestore().collection('customers')
        .add({
          nomeFantasia: nomeFantasia,
          cnpj: cnpj,
          endereço: endereço
        })
        .then(() => {
          setNomeFantasia('');
          setCnpj('');
          setEndereço('');
          toast.info('Empresa cadastrada com sucesso!')
        })
        .catch((error) => {
          console.log(error);
          toast.error('Erro ao cadastrar essa empresa.');
        })
    } else {
      toast.error('Preencha todos os campos!')
    }
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
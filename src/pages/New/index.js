import './new.css'
import Title from '../../components/Title';
import Header from '../../components/Header';
import { FiPlusCircle } from 'react-icons/fi';

export default function New() {

  function handleRegister(e) {
    e.preventDefault();

    alert('Teste')
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Novo chamado">
          <FiPlusCircle size={25} />
        </Title>

        <div className="container" onSubmit={handleRegister}>
          <form className="form-profile">
            <label>Cliente</label>
            <select>
              <option key={1} value={1}>Sujeito Programador</option>
            </select>

            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input type="radio" name="radio" value="Aberto" />
              <span>Em Aberto</span>

              <input type="radio" name="radio" value="Progresso" />
              <span>Progresso</span>

              <input type="radio" name="radio" value="Atendido" />
              <span>Atendido</span>
            </div>
            <label>Complemento</label>
            <textarea type="text" placeholder="Descreva seu problema (opcional)" />

            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
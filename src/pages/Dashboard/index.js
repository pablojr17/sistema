import './dashboard.css';
import { useState } from 'react';
import Title from '../../components/Title';
import Header from '../../components/Header';
import { FiMessageSquare, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Dashboard() {
  const [chamados, setChamados] = useState([]);

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Atendimento">
          <FiMessageSquare size={25} />
        </Title>

        {chamados.length === 0 ? (

          <div className="container dashboard">
            <span>Nenhum chamado registrado...</span>

            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFf" />
          Novo chamado
        </Link>
          </div>
        ) : (
          <>
            <Link to="/new" className="new">
              <FiPlus size={25} color="#FFf" />
          Novo chamado
        </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard;
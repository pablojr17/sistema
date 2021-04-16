import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Title from '../../components/Title';
import Header from '../../components/Header';
import { FiHome } from 'react-icons/fi';

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <h1>Pagina de Dashboard</h1>
    </div>
  )
}

export default Dashboard;
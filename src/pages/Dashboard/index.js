import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <h1>Pagina de Dashboard</h1>
      <button onClick={() => signOut()}>Fazer logout</button>
    </div>
  )
}

export default Dashboard;
import './profile.css';
import Title from '../../components/Title';
import Header from '../../components/Header';

import { FiSettings } from 'react-icons/fi';

export default function Profile() {
  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Meu perfil">
          <FiSettings size={25} />
        </Title>
      </div>
    </div>
  );
}
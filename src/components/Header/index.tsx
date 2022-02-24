import { Link, useLocation } from 'react-router-dom';
import { formatTextHeader } from '../../utils/tools';
import { Conteiner } from './styles';
import { MdOutlineAddIcCall } from 'react-icons/md';
export function Header() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <Conteiner>
      <h3>{formatTextHeader(splitLocation[1])}</h3>

      {splitLocation[1] != 'novo-contato' && (
        <Link to='/novo-contato'>
          <MdOutlineAddIcCall /> Novo Contato
        </Link>
      )}
    </Conteiner>
  );
}

import { useLocation } from 'react-router-dom';

import { AiOutlineStar, AiOutlinePhone } from 'react-icons/ai';
import { SiderBarItens } from '../SiderBarItens';
import { Conteiner } from './styles';

export function SiderBar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <Conteiner>
      <img src='/src/assets/logo.png' alt='Logo lista de contatos' />
      <ul>
        <SiderBarItens
          link='/'
          name='Telefones'
          isSelected={splitLocation[1] === ''}
          icon={<AiOutlinePhone />}
        />
        <SiderBarItens
          link='/favoritos'
          name='Favoritos'
          isSelected={splitLocation[1] === 'favoritos'}
          icon={<AiOutlineStar />}
        />
      </ul>
    </Conteiner>
  );
}

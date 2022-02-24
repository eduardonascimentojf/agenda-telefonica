import { IContacts } from '../../type';
import { formatNumber } from '../../utils/tools';
import { Conteiner } from './styles';

export function ModalContact(props: IContacts) {
  return (
    <Conteiner>
      <img src={props.img} alt='' />
      <div>
        <p>
          <span>Nome: </span>
          {props.name}
        </p>
        <p>
          <span>Email: </span>
          {props.email}
        </p>
        <div>
          {props.telephones.map((value, index) => (
            <p key={index}>
              <span>{value.type}: </span>
              {formatNumber(value.number)}
            </p>
          ))}
        </div>
      </div>
    </Conteiner>
  );
}

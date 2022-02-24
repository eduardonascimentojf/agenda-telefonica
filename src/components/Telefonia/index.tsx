import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { api } from '../../services/api';
import * as T from '../../type';
import { ContactsItem } from '../ContactsItem';
import * as S from './styles';

export function Telefonia() {
  const [contacts, setContacts] = useState<T.IContacts[]>();
  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get('/ListContact');
        const resp = await data.contacts;
        console.log(resp);
        setContacts(resp);
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);
  return (
    <S.Conteiner>
      {contacts?.map((value, index) => (
        <ContactsItem key={index} {...value} />
      ))}
    </S.Conteiner>
  );
}

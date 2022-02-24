import { useEffect } from 'react';

import { ContactsItem } from '../../components/ContactsItem';
import { api } from '../../services/api';
import { setContact } from '../../store/slices/contactSlice';
import { setEditContact } from '../../store/slices/editContactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import * as T from '../../type';
import * as S from './styles';
import ReactDOM from 'react-dom';

export function Favorites() {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contact.data);
  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get('/ListContactFavorite');
        const resp = await data.contacts;
        dispatch(setContact(resp));
      } catch (error) {
        console.log(error);
      }
    }
    getItems();
  }, []);

  return (
    <>
      {contacts && (
        <>
          {contacts.map((value, index) => (
            <ContactsItem key={index} {...value} />
          ))}
        </>
      )}
    </>
  );
}

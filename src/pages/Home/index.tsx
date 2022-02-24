import { setContact } from '../../store/slices/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import { useEffect } from 'react';
import { api } from '../../services/api';
import { ContactsItem } from '../../components/ContactsItem';
import { setEditContact } from '../../store/slices/editContactSlice';

export function Home() {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contact.data);
  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.get('/ListContact');
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

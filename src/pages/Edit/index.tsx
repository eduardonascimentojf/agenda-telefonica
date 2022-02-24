import { useEffect, useState } from 'react';

import { ContactsItem } from '../../components/ContactsItem';
import { api } from '../../services/api';
import { setContact } from '../../store/slices/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import * as T from '../../type';
import * as S from './styles';
import { FormContactEdit } from '../../components/FormContactEdit';
import { setEditContact } from '../../store/slices/editContactSlice';

export function Edit() {
  const editContact = useSelector((state: RootState) => state.editContact.data);
  const contact = useSelector((state: RootState) => state.contact.data);
  const [found, setFound] = useState<T.IContacts>();
  useEffect(() => {
    setFound(
      contact.find((value) => {
        if (value.id === editContact) return value;
      })
    );
  }, []);

  return (
    <div>
      {found ? (
        <FormContactEdit {...found} />
      ) : (
        <p>Nenhum contato selecionado</p>
      )}
    </div>
  );
}
function dispatch(arg0: { payload: any; type: string }) {
  throw new Error('Function not implemented.');
}

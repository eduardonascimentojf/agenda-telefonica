import { SubmitHandler, useForm } from 'react-hook-form';
import { IContacts } from '../../type';
import * as S from './styles';
import { InputFileImage } from '../InputFileImage';
import { Checkbox } from '@mui/material';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
type Inputs = {
  name: string;
  email: string;
  img: File;
  telephones: {
    type: string;
    number: string;
  };
  isFavorite: boolean;
};
export function FormContactEdit(props: IContacts) {
  const defaultValues = {
    name: props.name,
    email: props.email,
    number: props.telephones[0].number,
  };
  let navigate = useNavigate();
  const image: File | null = useSelector(
    (state: RootState) => state.image.data
  );
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => editContact(data);
  async function editContact({ name, email, isFavorite, telephones }: Inputs) {
    const telephone = {
      type: 'Celular',
      number: telephones.number,
    };
    const formatData = new FormData();
    formatData.append('name', name);
    formatData.append('email', email);
    formatData.append('isFavorite', JSON.stringify(isFavorite));
    formatData.append('telephones', JSON.stringify(telephone));
    if (image) {
      formatData.append('img', image);
    }
    await api
      .put(`editContact/${props.id}`, formatData)
      .then((response: any) => {
        if (response.status == 201) {
          navigate('/');
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <S.Conteiner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputFileImage />
          <div className='wrapping '>
            <div>
              <label>Nome Completo</label>
              <input
                type='text'
                placeholder='Nome Completo'
                defaultValue={defaultValues.name}
                {...register('name', {
                  required: true,
                })}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type='text'
                placeholder='exemplo@email.com'
                defaultValue={defaultValues.email}
                {...register('email', {
                  required: true,
                })}
              />
            </div>
            <div>
              <label>Celular</label>
              <input
                type='number'
                placeholder='Somente numeros'
                defaultValue={defaultValues.number}
                {...register('telephones.number', {
                  min: 0,
                  minLength: 8,
                  maxLength: 11,
                  required: true,
                })}
              />
            </div>
            <div className='checkbox'>
              <label>Favorito</label>
              <Checkbox
                defaultChecked={props.isFavorite}
                {...register('isFavorite')}
                icon={<AiOutlineStar />}
                checkedIcon={<AiFillStar />}
                onClick={(e) => setChecked(!checked)}
              />
            </div>
          </div>
        </div>
        <button type='submit' className='update'>
          Editar
        </button>
        <button onClick={() => navigate('/')} className='cancel'>
          Cancelar
        </button>
      </form>
    </S.Conteiner>
  );
}

import { SubmitHandler, useForm } from 'react-hook-form';
import * as S from './styles';
import { InputFileImage } from '../../components/InputFileImage';
import { Checkbox } from '@mui/material';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { cloneElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { api } from '../../services/api';
import { setEditContact } from '../../store/slices/editContactSlice';
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
export function NewContact() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const image: File | null = useSelector(
    (state: RootState) => state.image.data
  );
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => createContact(data);
  async function createContact({
    name,
    email,
    isFavorite,
    telephones,
  }: Inputs) {
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
      .post('newContact', formatData)
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
  useEffect(() => {
    dispatch(setEditContact(''));
  }, []);

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
                {...register('isFavorite')}
                icon={<AiOutlineStar />}
                checkedIcon={<AiFillStar />}
                onClick={(e) => setChecked(!checked)}
              />
            </div>
          </div>
        </div>
        <button type='submit' className='update'>
          Cadastrar
        </button>
        <button onClick={() => navigate('/')} className='cancel'>
          Cancelar
        </button>
      </form>
    </S.Conteiner>
  );
}

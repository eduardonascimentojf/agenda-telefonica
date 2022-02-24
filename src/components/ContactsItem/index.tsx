import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setEditContact } from '../../store/slices/editContactSlice';

import { IContacts } from '../../type';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { ModalContact } from '../ModalContact';
import { formatNumber, updateFavorite } from '../../utils/tools';
import { ButtonDelete } from '../ButtonDelete';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function ContactsItem(props: IContacts) {
  const dispatch = useDispatch();
  const [putFavorite, setPutFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  async function teste(id: string, value: boolean) {
    if (!putFavorite) {
      setPutFavorite(!updateFavorite(id, value));
    }
  }

  return (
    <S.Wrapper>
      <S.Contacts>
        <div onClick={handleOpen} className='infos'>
          <img src={props.img} alt={props.name} />
          <p>{props.name}</p>
          <p className='telephone'>
            <span>{props.telephones[0].type}</span>
            {formatNumber(props.telephones[0].number)}
          </p>
        </div>
        {props.isFavorite ? (
          <AiFillStar onClick={() => teste(props.id, !props.isFavorite)} />
        ) : (
          <AiOutlineStar onClick={() => teste(props.id, !props.isFavorite)} />
        )}
        <S.Buttons>
          <Link
            to='/editar'
            onClick={() => {
              dispatch(setEditContact(props.id));
            }}
          >
            <button className='edit'>Editar</button>
          </Link>
          <ButtonDelete id={props.id} />
        </S.Buttons>
      </S.Contacts>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <S.Modal>
          <ModalContact {...props} />
        </S.Modal>
      </Modal>
    </S.Wrapper>
  );
}

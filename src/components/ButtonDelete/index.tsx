import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setContact } from '../../store/slices/contactSlice';
import { deleteContact } from '../../utils/tools';
import { Button, ButtonDialogActions } from './styles';

type propsType = {
  id: string;
};
export function ButtonDelete({ id }: propsType) {
  let navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    await deleteContact(id);
    setOpen(false);
    navigate('/');
  };
  return (
    <>
      <Button onClick={handleClickOpen}>Remover</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
          Excluir Contato
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que pretende excluir o contato?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonDialogActions
            className='cancel'
            autoFocus
            onClick={() => {
              setOpen(false);
              navigate('/' + splitLocation[1]);
            }}
          >
            Cancelar
          </ButtonDialogActions>
          <ButtonDialogActions className='remove' onClick={handleClose}>
            Excluir
          </ButtonDialogActions>
        </DialogActions>
      </Dialog>
    </>
  );
}

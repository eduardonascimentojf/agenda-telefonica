import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setImage } from '../../store/slices/imageSlice';
import { RootState } from '../../store/store';
import { Conteiner } from './styles';

export function InputFileImage() {
  const dispatch = useDispatch();
  const editContact = useSelector((state: RootState) => state.editContact.data);
  const image = useSelector((state: RootState) => state.image.data);
  const contact = useSelector((state: RootState) => state.contact.data);
  const resp = contact.find((value) => {
    if (value.id == editContact) return value;
  });
  const [preview, setPreview] = useState<string | null>();
  const inputFile = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    if (inputFile && inputFile.current) {
      inputFile.current.click();
      dispatch(setImage(null));
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  return (
    <Conteiner>
      <div className='preview' onClick={onButtonClick}>
        {preview ? (
          <img src={preview} alt='preview' />
        ) : (
          <>
            {resp ? (
              <img src={resp.img} className='actualPicture' />
            ) : (
              <p>Click aqui para esolher sua foto</p>
            )}
          </>
        )}
      </div>
      <input
        type='file'
        style={{ display: 'none' }}
        ref={inputFile}
        accept='image/*'
        onChange={(event) => {
          if (event.target.files && inputFile.current) {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === 'image') {
              dispatch(setImage(file));
            } else {
              dispatch(setImage(null));
            }
          }
        }}
      />
    </Conteiner>
  );
}

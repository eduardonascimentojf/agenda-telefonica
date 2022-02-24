import styled from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .preview {
    height: 150px;
    width: 150px;
    border: 2px dashed ${(props) => props.theme.color};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      padding: 2px;
      background-color: transparent;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .nameImage {
    margin-left: 15px;
  }
  input[type='file'] {
    button {
      background-color: red;
    }
  }
`;

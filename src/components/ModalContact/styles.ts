import styled from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  > div {
    display: grid;
    align-items: center;
    > div {
      display: grid;
      align-items: center;
      height: 100%;
    }
  }
  span {
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.primarry};
    margin-right: 0.5rem;
  }
`;

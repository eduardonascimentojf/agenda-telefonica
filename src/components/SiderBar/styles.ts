import styled from 'styled-components';

export const Conteiner = styled.div`
  background-color: ${(props) => props.theme.backgroundSiderBar};
  display: flex;
  flex-direction: column;
  img {
    height: 50px;
    margin: 40px auto;
  }
`;

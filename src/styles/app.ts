import styled from 'styled-components';

export const Conteiner = styled.div`
  max-width: 1500px;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px auto;
  margin: auto;
  background-color: ${(props) => props.theme.background};

  overflow-x: auto;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background: ${(props) => props.theme.black};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color};
  }

  @media (max-width: 1000px) {
    grid-template-columns: 180px auto;
  }
`;

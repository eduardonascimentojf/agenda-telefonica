import styled from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 2.5rem;
  h3 {
    color: ${(props) => props.theme.title};
    font-weight: ${(props) => props.theme.font.bold};
  }
  a {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem 0.7rem;
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.color};
    cursor: pointer;
    svg {
      margin-right: 0.4rem;
    }
    :hover {
      background: ${(props) => props.theme.primarry};
    }
  }
`;

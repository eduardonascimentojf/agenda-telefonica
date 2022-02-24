import styled from 'styled-components';

export const Conteiner = styled.div`
  flex: 1;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 2rem;
`;
export const Contacts = styled.div`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.backgroundSiderBar};
  }
  p {
    cursor: default;
    width: min-content;
    min-width: 120px;
    text-align: center;
  }
  svg:hover {
    color: ${(props) => props.theme.primarry};
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: default;
    button {
      cursor: pointer;
      width: 130px;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      &.edit {
        background-color: ${(props) => props.theme.primarry};
        margin-bottom: 0.5rem;
        :hover {
          background-color: transparent;
          color: ${(props) => props.theme.primarry};
          border: 1px solid ${(props) => props.theme.primarry};
        }
      }
      &.remove {
        background-color: ${(props) => props.theme.danger};
        :hover {
          background-color: transparent;
          color: ${(props) => props.theme.danger};
          border: 1px solid ${(props) => props.theme.danger};
        }
      }
    }
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

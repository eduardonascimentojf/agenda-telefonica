import styled from 'styled-components';

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
  grid-template-columns: auto auto auto;
  justify-items: center;
  align-items: center;
  :hover {
    background-color: ${(props) => props.theme.backgroundSiderBar};
  }
  .infos {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    cursor: pointer;
  }
  p {
    width: min-content;
    min-width: 120px;
    text-align: center;
    &.telephone {
      display: flex;
      flex-direction: column;
    }
  }

  svg:hover {
    color: ${(props) => props.theme.primarry};
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  @media (max-width: 800px) {
    .infos {
      grid-template-columns: auto;
      gap: 10px;
      justify-items: center;
      .telephone {
        flex-direction: row;
        span {
          margin-right: 10px;
        }
      }
    }
  }
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .infos {
      grid-template-columns: auto;
      row-gap: 15px;
      justify-items: center;
      .telephone {
        flex-direction: column;
        span {
          margin-bottom: 10px;
        }
      }
    }
    svg {
      margin: 15px auto;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: default;
  button {
    cursor: pointer;
    width: 130px;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    &.edit {
      background-color: ${(props) => props.theme.primarry};
      margin-bottom: 0.5rem;
      :hover {
        background-color: transparent;
        color: ${(props) => props.theme.primarry};
        border: 1px solid ${(props) => props.theme.primarry};
      }
    }
  }
`;

export const Modal = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 600px;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.backgroundSiderBar};
`;

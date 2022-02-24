import styled from 'styled-components';

export const Conteiner = styled.div`
  margin: 1.5rem 2.5rem;
  form > div {
    display: flex;
    > div {
      width: min-content;
      margin-right: 2.5rem;
    }
    .wrapping {
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      gap: 2rem 5rem;
      padding: 1rem;
    }
    label {
      display: flex;
      margin-bottom: 0.5rem;
      flex-direction: column;
      margin-top: 15px;
      font-weight: ${(props) => props.theme.font.bold};
    }
    input {
      width: 100%;
      background-color: transparent;
      border-radius: 0.25rem;
      height: 20px;
      padding: 4px 14px;
      color: ${(props) => props.theme.borderColor};
    }
    span.error {
      margin-top: 0.5rem;
      font-size: 12px;
      color: ${(props) => props.theme.borderColor};
    }
    svg {
      color: ${(props) => props.theme.borderColor};
    }
  }

  button {
    float: right;
    font-size: 18px;
    border-radius: 0.5rem;
    padding: 0.5rem 0.7rem;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: ${(props) => props.theme.font.bold};
    &.update {
      color: ${(props) => props.theme.title};
      font-weight: ${(props) => props.theme.font.bold};
      background-color: ${(props) => props.theme.primarry};
      :hover {
        color: ${(props) => props.theme.primarry};
        background-color: ${(props) => props.theme.title};
      }
    }
    &.cancel {
      margin-right: 2rem;
      color: ${(props) => props.theme.title};

      :hover {
        color: ${(props) => props.theme.primarry};
      }
    }
  }
  @media (max-width: 1000px) {
    form > div {
      flex-direction: column;
      align-items: center;
    }
    .wrapping {
      grid-template-columns: auto;
      align-items: flex-end;
      .checkbox {
        display: flex;
        align-items: center;
      }
      .telephone {
        flex-direction: row;
        span {
          margin-right: 10px;
        }
      }
    }
  }
  @media (max-width: 650px) {
    form {
      display: flex;
      flex-direction: column;
      > div {
        flex-direction: column;
        align-items: center;
        .wrapping {
          grid-template-columns: auto;
          align-items: flex-end;
          width: auto;
        }
      }
      button.cancel {
        margin: 0.5rem 0 0;
      }
    }
  }
`;

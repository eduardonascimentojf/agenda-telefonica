import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.danger};
  :hover {
    background-color: transparent;
    color: ${(props) => props.theme.danger};
    border: 1px solid ${(props) => props.theme.danger};
  }
`;
export const ButtonDialogActions = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  &.remove {
    background-color: ${(props) => props.theme.danger};
    :hover {
      background-color: transparent;
      color: ${(props) => props.theme.danger};
      border-color: ${(props) => props.theme.danger};
    }
  }
  &.cancel:hover {
    border-color: ${(props) => props.theme.black};
  }
`;

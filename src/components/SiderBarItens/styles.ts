import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Conteiner = styled(Link)`
  display: flex;
  padding: 10px;
  margin: 15px;
  border-radius: 0.5rem;
  align-items: center;
  cursor: pointer;
  font-weight: ${(props) => props.theme.font.bold};
  color: ${(props) => props.theme.title};
  &.isSelected {
    color: ${(props) => props.theme.primarry};
  }
  :hover {
    color: ${(props) => props.theme.title};
    background-color: ${(props) => props.theme.primarry};
  }
  p {
    margin-left: 10px;
  }
`;

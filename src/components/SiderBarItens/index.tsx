import React from 'react';

import { Conteiner } from './styles';
type Props = {
  name: string;
  isSelected: boolean;
  icon: React.ReactNode;
  link: string;
};
export function SiderBarItens({ name, isSelected, icon, link }: Props) {
  return (
    <Conteiner to={link} className={isSelected ? 'isSelected' : ''}>
      {icon}
      <p>{name}</p>
    </Conteiner>
  );
}

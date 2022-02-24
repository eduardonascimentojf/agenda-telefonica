export interface IContacts {
  id: string;
  name: string;
  email: string;
  img: string;
  telephones: ITelephone[];
  isFavorite: boolean;
}
export interface IContactsEdit {
  id?: string;
  name?: string;
  email?: string;
  img?: string;
  telephones?: ITelephone[];
  isFavorite?: boolean;
}
export interface ITelephone {
  id: string;
  type: string;
  number: string;
}

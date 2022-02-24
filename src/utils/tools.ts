import { api } from '../services/api';

export function formatTextHeader(value: string) {
  if (value === '') {
    return 'Contatos';
  }
  const newValue = value.charAt(0).toUpperCase() + value.slice(1);
  if (newValue.split('-').length > 1) {
    return newValue
      .split('-')
      .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
      .join(' ');
  }
  return newValue;
}

export function formatNumber(value: string) {
  var formattedNumber;
  let part1, part2, part3;
  switch (value.length) {
    case 8:
      part1 = value.slice(0, 4);
      part2 = value.slice(4, 8);
      return (formattedNumber = `${part1}-${part2}`);

    case 9:
      part1 = value.slice(0, 5);
      part2 = value.slice(5, 9);
      return (formattedNumber = `${part1}-${part2}`);

    case 10:
      part1 = value.slice(0, 2);
      part2 = value.slice(2, 6);
      part3 = value.slice(6, 10);
      return (formattedNumber = `(${part1}) ${part2}-${part3}`);

    default:
      part1 = value.slice(0, 2);
      part2 = value.slice(2, 6);
      part3 = value.slice(6, 10);
      return (formattedNumber = `(${part1}) ${part2}-${part3}`);
  }
}

export async function deleteContact(id: string) {
  try {
    const result = await api.delete('/DeletContact/' + id);
    console.log(result.status);
  } catch (error) {
    console.log(error);
  }
}

export async function updateFavorite(id: string, value: boolean) {
  const formatData = new FormData();
  formatData.append('isFavorite', JSON.stringify(value));
  try {
    const result = await api.put(`/setFavorite/${id}`, {
      isFavorite: value,
    });
    return;
  } catch (error) {
    console.log(error);
  }
}

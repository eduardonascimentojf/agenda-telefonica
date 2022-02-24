import { Routes, Route } from 'react-router-dom';
import { Edit } from '../pages/Edit';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { NewContact } from '../pages/NewContact';

export function AppRouter() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='favoritos' element={<Favorites />} />
      <Route path='/editar' element={<Edit />} />
      <Route path='/novo-contato' element={<NewContact />} />
    </Routes>
  );
}

import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { SiderBar } from './components/SiderBar';
import { AppRouter } from './routes';
import { Conteiner } from './styles/app';

export function App() {
  return (
    <BrowserRouter>
      <Conteiner>
        <SiderBar />
        <div>
          <Header />
          <AppRouter />
        </div>
      </Conteiner>
    </BrowserRouter>
  );
}

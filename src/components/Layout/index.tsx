import { Link, Outlet, useLocation } from 'react-router-dom';
import { LITERALS, ROUTES } from '@/constants';
import { useTheme } from '@/theme';
import './styles.css';

const Layout = () => {
  const location = useLocation();
  const { theme } = useTheme(); // Obtiene el tema actual y la función para cambiarlo

  return (
    <div className={`container theme--${theme}`}>
      {location.pathname !== ROUTES.HOME && <Link to={ROUTES.HOME}>{LITERALS.Home.back}</Link>}
      <div className="container__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

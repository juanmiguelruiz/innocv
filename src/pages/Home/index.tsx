import { Link } from 'react-router-dom';
import { ROUTES, LITERALS } from '@/constants';

const Home = () => (
  <>
    <Link to={ROUTES.TODO_LIST}>{LITERALS.Home.exercise1}</Link>
    <Link to={ROUTES.TOGGLE_THEME}>{LITERALS.Home.exercise2}</Link>
    <Link to={ROUTES.FORM}>{LITERALS.Home.exercise3}</Link>
    <Link to={ROUTES.CONTROLLED_FORM}>{LITERALS.Home.exercise3_controlled}</Link>
  </>
);

export default Home;

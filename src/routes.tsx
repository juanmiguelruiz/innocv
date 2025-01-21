import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants';
import Layout from 'components/Layout';
import Form from 'pages/Form';
import ControlledForm from 'pages/Form/ControlledForm';
import Home from 'pages/Home';
import TodoList from 'pages/TodoList';
import ThemedComponent from 'pages/ToggleTheme';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TODO_LIST} element={<TodoList />} />
        <Route path={ROUTES.TOGGLE_THEME} element={<ThemedComponent />} />
        <Route path={ROUTES.FORM} element={<Form />} />
        <Route path={ROUTES.CONTROLLED_FORM} element={<ControlledForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;

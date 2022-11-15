import { FC } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Content from './components/Content/Content';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import AuthProvider from './hoc/AuthProvider';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<AuthProvider />} >
      <Route index element={<Content />} />
    </Route>

    <Route path='login' element={<Login />} />
    <Route path='registration' element={<Registration />} />

  </Route>
))

const App: FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

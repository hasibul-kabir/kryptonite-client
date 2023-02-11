import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/signup' element={<Registration />} />
    <Route path='/login' element={<Login />} />
  </>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

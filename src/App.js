import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './componenets/Dashboard';
import Cart from './componenets/Cart';
import RootLayout from './componenets/RootLayout';
import './App.css'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))


  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

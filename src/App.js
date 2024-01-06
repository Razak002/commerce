import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './componenets/Dashboard';
import Cart from './componenets/Cart';
import RootLayout from './componenets/RootLayout';
import './App.css'
import Explore from './componenets/Explore';

function App() {
//react dom update on creating a route
  const router = createBrowserRouter(createRoutesFromElements(
    //this will show the dashboard index route
    <Route path='/' element={<RootLayout />}>
      {/* //this will dive dip into the componenets */}
      
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))


  return (
    <div className="App">
      {/* //to render our routing */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

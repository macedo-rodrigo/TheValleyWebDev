import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import React from 'react';
//import ProductDetail from './Components/ProductDetail/ProductDetail';
//import MyAccount from './Components/MyAccount/MyAccount';
//import Login from './Components/Login/Login';

// Lazy
const Products = React.lazy(() => import("./Components/Products/Products"));
const ProductDetail = React.lazy(() => import("./Components/ProductDetail/ProductDetail"));
const MyAccount = React.lazy(() => import("./Components/MyAccount/MyAccount"));
const Login = React.lazy(() => import("./Components/Login/Login"));

  // Contexto de login
  export const AuthContext = React.createContext({ user: null });

function App() {

  // Estado del login
  const [authInfo, setAuthInfo] = React.useState({ user: null });


  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/*Las rutas - el destino del "to", donde queda la lógica de la acción*/}
        <Routes>
          {/*Ruras no-lazy */}
          <Route path='/home' element={<Home></Home>}></Route>

          {/*Ruras lazy */}
          <Route path='/our-products' element={<React.Suspense fallback={<p className='fallback'>Loading products...</p>}>
            <Products></Products>
          </React.Suspense>}></Route>

          <Route path='/my-account' element={<React.Suspense fallback={<p className='fallback'>Loading...</p>}>
            <MyAccount></MyAccount>
          </React.Suspense>}></Route>

          <Route path='/login' element={<React.Suspense fallback={<p className='fallback'>Loading...</p>}>
            <Login login={setAuthInfo}></Login>
          </React.Suspense>}></Route>

          <Route path='/product-detail/:productId' element={<React.Suspense fallback={<p className='fallback'>Loading details...</p>}>
            <ProductDetail></ProductDetail>
          </React.Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

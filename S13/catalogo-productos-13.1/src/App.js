import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import React from 'react';
import ProductDetail from './Components/ProductDetail/ProductDetail';

// Lazy
const Products = React.lazy(() => import("./Components/Products/Products"));

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        {/*La navegaciòn es la parte visible de la pág.*/}
        <Header/>

        {/*Las rutas - el destino del "to", donde queda la lógica de la acción*/}
        <Routes>
          {/*Ruras no-lazy */}
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path="/product-detail/:productId" element={<ProductDetail/>}></Route>

          {/*Ruras lazy */}
          <Route path='/our-products' element={<React.Suspense fallback={<p className='fallback'>Loading products...</p>}><Products></Products></React.Suspense>}></Route>
        </Routes>




      </BrowserRouter>
    </div>
  );
}

export default App;

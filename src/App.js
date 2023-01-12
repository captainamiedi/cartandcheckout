import ProductListPage from './Pages/ProductList';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import ProductDetailsPage from './Pages/ProductDetails';

function App() {
  
  return (
      <>
        <Routes>
          <Route path='/' element={ <ProductListPage />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/details/:id' element={<ProductDetailsPage />} />
        </Routes>
      </>
  );
}

export default App;

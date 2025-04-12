import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrap from './components/NavbarBootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import CheckoutForm from './components/CheckoutForm';
import Nosotros from './components/Nosotros';
import Ebooks from './components/Ebooks';


function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarBootstrap/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting= 'BIENVENIDOS' /> }/> 
          <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Categoria:'/> } /> 
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/> 
          <Route path='/checkoutform' element={<CheckoutForm/>}/>
          <Route path='/nosotros' element= {<Nosotros/>}/>
          <Route path='/ebooks' element= {<Ebooks/>}/>
        </Routes>
     
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

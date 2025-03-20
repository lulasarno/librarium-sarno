import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrap from './components/NavbarBootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  

  return (
    <BrowserRouter>
      <NavbarBootstrap/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting= 'BIENVENIDOS' /> }/> 
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting='Categoria:'/> } /> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
     
    
    </BrowserRouter>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarComponent from './components/NavbarComponent'


function App() {
  

  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting= 'BIENVENIDOS' />
    
    </>
  )
}

export default App

import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav/MainNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';

function App() {

  const onAdd = (count) => {
    alert(`Ud a agergado ${count} unidades al carrito`);
  }

  return (
    <CartContext.Provider>
    <BrowserRouter>
    <div className="App">
      <MainNav />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido a TiendaCompras</h1> */}
      </header>
      <div>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer name="Christian" onAdd={onAdd}></ItemListContainer>
          </Route>
          <Route exact path='/detalle'>
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
          <Route exact path='/categoria/:category'>
            <ItemListContainer></ItemListContainer>
          </Route>
        </Switch>
      </div>
      <footer className="Footer">
          <p>Autor: Christian Martini</p>
          <p><a href="mailto:christian.martini@outlook.com">christian.martini@outlook.com</a></p>
      </footer>
    </div>
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App

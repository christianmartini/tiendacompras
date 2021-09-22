import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav/MainNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext,CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { useContext } from 'react';

function App() {
  const carrito = useContext(CartContext)
  return (
    <CartContextProvider value={carrito}>
    <BrowserRouter>
    <div>
      <MainNav />
      <div>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer name="Christian"></ItemListContainer>
          </Route>
          <Route exact path='/detalle/:id'>
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
          <Route exact path='/categoria/:category'>
            <ItemListContainer></ItemListContainer>
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
      <footer className="Footer">
          <p>Autor: Christian Martini</p>
          <p><a href="mailto:christian.martini@outlook.com">christian.martini@outlook.com</a></p>
      </footer>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav/MainNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  
  const onAdd = (count) => {
    alert(`Ud a agergado ${count} unidades al carrito`);
  };

  return (
    <div className="App">
      <MainNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>Bienvenido a TiendaCompras</h1>
        <ItemListContainer name="Christian"></ItemListContainer>
        <ItemCount initial={1} stock={10} onAdd={onAdd}></ItemCount>
      </header>
      <footer className="Footer">
          <p>Autor: Christian Martini</p>
          <p><a href="mailto:christian.martini@outlook.com">christian.martini@outlook.com</a></p>
      </footer>
    </div>
  )
}
export default App;

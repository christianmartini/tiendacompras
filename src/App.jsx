import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav/MainNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <MainNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>Bienvenido a TiendaCompras</h1>
        <ItemListContainer name="Christian" />
      </header>
    </div>
  )
}
export default App;

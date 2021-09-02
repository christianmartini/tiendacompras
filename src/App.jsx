import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav/MainNav';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  const onAdd = (count) => {
    alert(`Ud a agergado ${count} unidades al carrito`);
  }

  return (
    <div className="App">
      <MainNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido a TiendaCompras</h1>
      </header>
      <body>
        <ItemListContainer name="Christian" onAdd={onAdd}></ItemListContainer>
      </body>
      <footer className="Footer">
          <p>Autor: Christian Martini</p>
          <p><a href="mailto:christian.martini@outlook.com">christian.martini@outlook.com</a></p>
      </footer>
    </div>
  )
}

export default App

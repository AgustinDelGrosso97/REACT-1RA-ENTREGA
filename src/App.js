import Counter from './components/Counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Counter />
      <ItemListContainer greeting={'Bienvenido a mi Ecommerce'}/>
    </div>
  );
}

export default App;

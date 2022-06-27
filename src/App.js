
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
     <div className="header"><h1>The Rick and Morty </h1></div>
     <div className="item"><ItemDetailContainer/></div>     
    </div>
  );
}

export default App;

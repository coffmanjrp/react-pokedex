import { CardList } from './components/cards';
import { CardState } from './context/cards';
import './assets/css/App.css';

const App = () => {
  return (
    <CardState>
      <div className="flex-container">
        <h1>React Pokedex</h1>
        <CardList />
      </div>
    </CardState>
  );
};

export default App;

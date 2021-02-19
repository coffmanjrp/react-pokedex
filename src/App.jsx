import { CardList } from './components/cards';
import { Navbar } from './components/layouts';
import { CardState } from './context/cards';
import './assets/css/App.css';

const App = () => {
  return (
    <CardState>
      <div className="flex-container">
        <Navbar />
        <CardList />
      </div>
    </CardState>
  );
};

export default App;

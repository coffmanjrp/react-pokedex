import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/layouts';
import { About, Home } from './components/pages';
import { PokemonState } from './context/pokemon';
import './assets/css/App.css';

const App = () => {
  return (
    <PokemonState>
      <Router>
        <div className="flex-container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </PokemonState>
  );
};

export default App;

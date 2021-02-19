import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/layouts';
import { About, Home } from './components/pages';
import { CardState } from './context/cards';
import './assets/css/App.css';

const App = () => {
  return (
    <CardState>
      <Router>
        <div className="flex-container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </CardState>
  );
};

export default App;

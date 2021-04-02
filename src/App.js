import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { NewComponent } from './components/NewComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/newcomponent" exact component={NewComponent}></Route>
          <Route path="/" exact component={MainComponent}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

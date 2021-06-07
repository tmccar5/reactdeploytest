import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageOne from './pageone';
import pageTwo from './pageTwo';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Link to='/two'>Two</Link>
      <Link to='/'>One</Link>

      <Route exact path="/" component={PageOne} />
      <Route exact path="/two" component={pageTwo} />
      

      
      {/* </Router> */}
      
    </div>
  );
}

export default App;

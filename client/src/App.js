import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomeScreen from '../src/Screens/HomeScreen.js'
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen'

function App() {
  return (
    <Router>
      <Navbar />


      <Switch>
        {/* HomeScreen */}
        <Route exact path="/" component={HomeScreen} />
        {/* ProductScreen */}
        <Route exact path="/product/:id" component={ProductScreen} />
        {/* CartScreen */}
        <Route exact path="/cart" component={CartScreen} />
      </Switch>



    </Router>
  );
}

export default App;

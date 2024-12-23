import {Route , Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Pricing from './components/Pricing';
import Blogs from './components/Blogs'
import About from './components/About'
import Contact from './components/Contact';

const App = () =>(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/blogs' component={Blogs}/>
    <Route exact path='/pricing' component={Pricing} />
  </Switch>
)


export default App;

//import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Api from './Components/Api';

function App() {
  return (
    <> 
    <Router>
      <Header title="React App" mobile="+91-9990156554" email="vipinkumar353@gmail.com"/> 
      <Switch>
          <Route exact path="/">
            <Wrapper/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/contact">
            <Contact />
          </Route> 
          <Route exact path="/apicall">
            <Api />
          </Route> 

        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;

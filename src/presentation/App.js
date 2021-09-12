import './dist/css/main.css'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import {getServices} from "../logic/AccessServices";
import Footer from "./components/Footer";
import About from "./pages/About";
import Books from "./pages/Books";
function App() {
    const services=getServices();
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Home services={services} />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/book-store">
                <Books />
            </Route>


            <Route path="/services">
                <Services services={services} />
            </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;

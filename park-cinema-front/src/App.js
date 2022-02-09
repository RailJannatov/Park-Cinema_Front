import Home from "./components/Pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import { Col, Row } from "react-bootstrap";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
<<<<<<< HEAD
import Advertisement from "./components/layout/Advertisement/Advertisment";
=======
import Cinemas from "./components/Pages/Home/Cinemas/Cinemas";
>>>>>>> fd2b97e7662a5c447b4a4756a33fa89928bfaeb2

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cinemas" component={Cinemas} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

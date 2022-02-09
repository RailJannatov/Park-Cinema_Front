import Home from "./components/Pages/Home/Home";
import Movie from "./components/common/Movie";
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
import Advertisement from "./components/layout/Advertisement/Advertisment";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Kino" component={Movie} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

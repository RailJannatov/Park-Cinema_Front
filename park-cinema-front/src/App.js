import Home from "./components/Pages/Home/Home";
import Navbar from "./components/layout/Navbar/Navbar";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Cinemas from "./components/Pages/Home/Cinemas/Cinemas";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cinemas" component={Cinemas} />
      </Switch>
    </>
  );
};

export default App;

import Main from "./main";
import { Route, Switch } from "react-router-dom";
import DetailView from "./componentes/details";
import Navbar from "./componentes/navbar/navbar";

const App = () => {
  return (
    <>
       <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/details' component={DetailView} />
      </Switch>
    </>
  );
};

export default App;

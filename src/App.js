import "./App.scss";
import { Switch, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import AfterSignUp from "./pages/AfterSignUp/AfterSignUp";
import ToDo from "./pages/ToDo/ToDo";

const App = () => {
  return (
    <section>
      <Switch>
        <Route path="/login" render={() => <LogIn />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/aftersignup" render={() => <AfterSignUp />} />
        <Route path="/todo" render={() => <ToDo />} />
      </Switch>
    </section>
  );
};

export default App;

import "./App.scss";
import { Switch, Route, useHistory } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import AfterSignUp from "./pages/AfterSignUp/AfterSignUp";
import ToDo from "./pages/ToDo/ToDo";
import { useEffect } from "react";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("log_in_user_info")) {
      history.push("/login");
    }
  }, [history]);

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

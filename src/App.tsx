import { FC } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import { RouteNames, Routes } from "./components/router";
import "./App.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map(({ path, component, exact }) => (
          <Route
            key={path}
            exact={exact}
            path={path}
            component={component}
          ></Route>
        ))}
        {/* <Redirect to={RouteNames.SHOPPING_CART} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;

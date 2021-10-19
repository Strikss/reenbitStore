import { FC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Routes } from "./components/router";
import "./App.css";

const App: FC = () => {
  return (
    <HashRouter>
      <Switch>
        {Routes.map(({ path, component, exact }) => (
          <Route
            key={path}
            exact={exact}
            path={path}
            component={component}
          ></Route>
        ))}
      </Switch>
    </HashRouter>
  );
};

export default App;

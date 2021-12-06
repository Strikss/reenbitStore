import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Routes } from "./router/router";
import "./App.css";
import { useAction } from "./hooks/useAction";
import { useAppSelector } from "./hooks/selectorHook";
import { rebuyProducts } from "./helpers/rebuyProducts/rebuyProducts";
import { Profile } from "./interfaces/product";

const App: React.FC = () => {
  //HOOKS
  const { buyProduct, logIn } = useAction();
  const { boughtProducts } = useAppSelector((state) => state.products);

  const profile: Profile = JSON.parse(
    localStorage.getItem("profile") as string
  );
  useEffect(() => {
    rebuyProducts(buyProduct, boughtProducts.length);
  }, []);
  useEffect(() => {
    if (profile !== null && profile.name) {
      logIn(profile);
    }
  }, [profile]);

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

import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Routes } from "./router/router";
import "./App.scss";
import { useAction } from "./hooks/useAction";
import { useAppSelector } from "./hooks/selectorHook";
import { rebuyProducts } from "./helpers/rebuyProducts/rebuyProducts";

const App: React.FC = () => {
  //HOOKS
  const { buyProduct } = useAction();
  const { boughtProducts } = useAppSelector((state) => state.products);

  useEffect(() => {
    rebuyProducts(buyProduct, boughtProducts.length);
  }, []);

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

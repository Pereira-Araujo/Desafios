import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../Pages/Login/index";

import Initial from "../Pages/Private/Initial/index";
import ListClients from "../Pages/Private/ListClients/index";
import AddClients from "../Pages/Private/AddClients/index";

import NotFoundPage from "../Pages/NotFoundPage";

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/initial">
          <Initial />
        </Route>

        <Route exact path="/clients">
          <ListClients />
        </Route>

        <Route exact path="/add-clients">
          <AddClients />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      
    </BrowserRouter>
  );
};

export default Router;

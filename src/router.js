import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Search,
  Organisation,
  User,
  FollowersList,
  FollowingList
} from "./pages";
import store from "./store/store";

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/organisation/:id" component={Organisation} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/followers/:id" component={FollowersList} />
          <Route exact path="/following/:id" component={FollowingList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

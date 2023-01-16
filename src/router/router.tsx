import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeScreen } from '../views/screens';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
};

import React, {useReducer, useState, useEffect} from 'react';
import PageLogin from './pages/PageLogin';
import PageListPosts from './pages/PageListPosts';
import PageCadastro from './pages/PageCadastro';
import PagePost from './pages/PagePost';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {PostsContext} from './Context/index'


const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PageLogin/>
          </Route>
          <Route exact path="/cadaster">
            <PageCadastro/>
          </Route>
          <Route exact path="/feed">
            <PageListPosts/>
          </Route>
          <Route exact path="/:idPost">
            <PagePost/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;

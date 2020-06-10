import React, {useReducer, useState, useEffect} from 'react';
import PageLogin from './pages/PageLogin';
import PageListPosts from './pages/PageListPosts';
import PageCadastro from './pages/PageCadastro';
import PagePost from './pages/PagePost';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {PostsContext} from './Context/index'
import axios from 'axios'

const initialState = {
  post: []
}

const reducer = (state,action)=>{
  switch(action.type){
    default: 
    return state
  }
}

const App = () => {

  return (
    <PostsContext.Provider value={null}>
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
          <Route exact path="/:post">
            <PagePost/>
          </Route>
        </Switch>
      </BrowserRouter>
    </PostsContext.Provider>
  );
}

export default App;

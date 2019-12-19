import React from 'react';
import { Route } from "react-router-dom";

import './App.css';

import Aux from "./HOC/Wrapper"
import Layout from "./Layout/Layout"
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import AddPost from "./Components/AddPost/AddPost"
import EditPost from "./Components/EditPost/EditPost"

function App() {
  return (
    <Aux>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Signup} />
      <Route path="/add-post" component={AddPost} />
      <Route path="/edit-post/:id" component={EditPost} />
      <Route path="/" component={Layout} exact />
    </Aux>
  );
}

export default App;

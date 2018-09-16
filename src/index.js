import React from "react";
import { render } from "react-dom";
import Header from "./components/header/header.js";
import PublicFeed from "./components/public_feed/public_feed.js";

import './index.css';

const App = () =>{
  return (
    <div>
      <Header />
      <PublicFeed />
    </div>
  )
};

render(<App />, document.getElementById("app"));

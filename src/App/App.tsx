import React from 'react';
import {Navbar} from "../Componant/NavBar/Navbar";
import {Footer} from "../Componant/Footer/Footer";
import {Comment} from "postcss";
import {Content} from "../Componant/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Content/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

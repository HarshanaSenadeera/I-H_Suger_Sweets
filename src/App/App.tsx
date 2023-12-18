import React from 'react';
import {Navbar} from "../Componant/NavBar/Navbar";
import {Footer} from "../Componant/Footer/Footer";
import {Comment} from "postcss";
import {Content} from "../Componant/Content/Content";

function App() {
  return (
    <>
      <Navbar/>
        <Content/>
        <Footer/>
    </>
  );
}

export default App;

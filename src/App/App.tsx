import React from 'react';
import {Navbar} from "../Componant/NavBar/Navbar";
import {Footer} from "../Componant/Footer/Footer";
import {Comment} from "postcss";
import {Content} from "../Componant/Content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Default} from "../Componant/Default/Default";
import {Logging} from "../Pages/Logging/Logging";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/*"
               Component={Default}>
        </Route>

          <Route path="/login"
                 Component={Logging}>
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

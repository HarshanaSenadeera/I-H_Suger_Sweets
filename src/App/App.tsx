import React from 'react';
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

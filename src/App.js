import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { RegisterOne,RegisterTwo,RegisterThree,RegisterFour } from './pages/index';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<RegisterOne/>}/>
        <Route path="/pagetwo" element={<RegisterTwo/>}/>
        <Route path="/pagethree" element={<RegisterThree/>}/>
        <Route path="/pagefour" element={<RegisterFour/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App;

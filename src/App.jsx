import React from "react";
import './main.scss'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddFeedBack from "./Pages/AddFeedBack/AddFeedBack";
import FeedDetail from "./Pages/FeedDetail/FeedDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddFeedBack/>}/>
        <Route path="/detail" element={<FeedDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/stream/new" exact element={<StreamCreate />} />
          <Route path="/stream/edit" exact element={<StreamEdit />} />
          <Route path="/stream/delete" exact element={<StreamDelete />} />
          <Route path="/stream/show" exact element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

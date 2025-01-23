import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";

const title = "Patient Medical Records";

const App = () => {
  const [id,setId]=useState();
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setId={setId} />
        {id&&
          <Records id={id} setId={setId}/>}
      
      </div>
    
    </div>
  );
};

export default App;

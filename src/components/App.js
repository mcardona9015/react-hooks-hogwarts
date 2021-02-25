import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
  const [filteredHogs, setFilteredHogs] = useState(hogs)

  return (
    <div className="App">
      <Nav />
      <Filter allHogs={hogs} filteredHogs={filteredHogs} setFilteredHogs={setFilteredHogs}/>
      <br></br>
      <br></br>
      <br></br>
      <HogList hogsData={filteredHogs} />
    </div>
  );
}

export default App;

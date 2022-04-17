import React from "react";

import Bubble from "./components/Bubble";

/* Children */
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main-page">
        <Home />
        <Home />
      </main>

      <Bubble />
    </div>
  );
}

export default App;

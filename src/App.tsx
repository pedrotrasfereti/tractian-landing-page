import React from "react";

/* Children */
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main-page">
        <Home />
      </main>
    </div>
  );
}

export default App;

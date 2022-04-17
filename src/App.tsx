import React from "react";

/* Children */
import { Header, Home, Teaser, Bubble } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="content-page">
        <Home />
        <Teaser />
      </main>

      <Bubble />
    </div>
  );
}

export default App;

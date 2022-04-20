import React from "react";

/* Children */
import { Header, Home, Teaser, Bubble, WhyTractian } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="content-page">
        <Home />
        <Teaser />
        <WhyTractian />
      </main>

      <Bubble />
    </div>
  );
}

export default App;

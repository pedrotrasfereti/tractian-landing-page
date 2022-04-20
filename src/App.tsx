import React from "react";

/* Children */
import {
  Header,
  Home,
  Teaser,
  Bubble,
  WhyTractian,
  Products,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="content-page">
        <Home />
        <Teaser />
        <Products />
        <WhyTractian />
      </main>

      <Bubble />
    </div>
  );
}

export default App;

import React from "react";

/* Styles */
import "./App.css";

/* Children */
import {
  Header,
  Home,
  Teaser,
  Bubble,
  WhyTractian,
  Products,
  HowItWorks,
  Statistics,
  Testimonials,
  RequestADemo,
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
        <HowItWorks />
        <Statistics />
        <Testimonials />
        <RequestADemo />
      </main>
      <Bubble />
    </div>
  );
}

export default App;

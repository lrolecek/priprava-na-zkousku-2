import React from "react";
import { createRoot } from "react-dom/client";

 function App() {
  return (
    <>
      <h1>Ahoj</h1>
      <p>Lorem,<br />ipsum dolor.</p>
      <img src="sdasd" alt="aaa" />
    </>
  )
}



/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);


import React from "react";
import { createRoot } from "react-dom/client";





/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

function Animal({name, type, age}) {    // destrukturovaný zápis
    return ( 
        <div>
            <h2>{name}</h2>
            <p>Typ zvirete: {type}</p>
            <p>Vek: {age} let</p>
        </div>
    )
}

function App() {
    return (
        <>
        <Animal name="Žofka" type="žirafa" age="7" />
        <Animal name="Hafík" type="pejsek" age="4" />
        </>
    )
}
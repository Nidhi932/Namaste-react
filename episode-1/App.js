import React from "react";
import ReactDOM from "react-dom/client";

const Point = () => <h1 id="heading">Namaste raect using JSX</h1>;
const Comp1 = () => (
  <>
    <h2>Hello Ji</h2>
    <Point />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp1 />);

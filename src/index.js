import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Contentful from "./contentful";
import Order from "./components/order";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Contentful React showcase {"\u2728"}</h2>
    <Contentful
      space="f20lfrunubsq"
      accessToken="41b863ccd753e5130befa713a8d6b068605094e1d85dc6eae5130f1eafacfa20"
    >
      <Order />
    </Contentful>
  </div>
);

render(<App />, document.getElementById("root"));

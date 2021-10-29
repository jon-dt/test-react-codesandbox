import ReactDOM from "react-dom";
// import App from "./App";
import CounterApp from "./CounterApp";

const rootElement = document.getElementById("root");
// ReactDOM.render(<App saludo="Hola, soy Goku" />, rootElement);
ReactDOM.render(<CounterApp value={10} />, rootElement);

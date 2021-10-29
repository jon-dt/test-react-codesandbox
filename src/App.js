import "./styles.css";
import PropTypes from "prop-types";

export default function App({ saludo }) {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <h2>{saludo}</h2>
    </>
  );
}
//PropTypes
App.propTypes = {
  saludo: PropTypes.string.isRequired
};

//DefaultProps
App.defaultProps = {
  saludo: "Hola, soy Vegeta"
};

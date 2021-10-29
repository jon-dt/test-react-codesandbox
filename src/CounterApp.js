import './styles.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ( { value }) => {
  const [ count, setCount ] = useState(value);
  const add = () => {
    setCount (count + 1)
  }
  const reset = () => {
    setCount (value)
  }
  const substract = () => {
    setCount (count - 1)
  }
  return (
    <>
      <h1>CounterApp</h1>
        <h2> { count } </h2>
        <button onClick= { substract }> -1 </button>
        <button onClick= { reset }> Reset </button>
        <button onClick= { add } > +1 </button>  
    </>
  );

}

CounterApp.propTypes = {
  value : PropTypes.number,
}

export default CounterApp;
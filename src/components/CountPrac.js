import { useState } from "react";
import styles from "../StylePrac.module.css";

export default function CountPrac() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  return (
    <div className={styles.header}>
      <h1>The Value is: {number} </h1>
      <button className={styles.incrementbutton} onClick={handleIncrement}>
        Increment
      </button>
      <button className={styles.resetbutton} onClick={handleReset}>
        Reset
      </button>
      <button className={styles.decrementbutton} onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

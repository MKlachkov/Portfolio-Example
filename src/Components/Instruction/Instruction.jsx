import React from "react";
import styles from "./Instruction.module.scss";
import Background from "../../assets/BG.jpg";
import Button from "../../Components/Button/Button";
function Section(props) {
  return (
    <div
      className={styles.instruction}
      style={{
        backgroundImage: `url(${Background})`,
        height: "728px",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <h1 className={styles.instruction__title}>Try Splice today</h1>
      <Button text="Start now" style={styles.button}></Button>
    </div>
  );
}

export default Section;

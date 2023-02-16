import React from "react";
import Button from "../Button/Button";
import styles from "./Section.module.scss";
function Section(props) {
  return (
    <section className={styles.section}>
      <div className="container">
        {props.option ? (
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <p className={styles.name}>{props.name}</p>
              <p className={styles.title}>{props.title}</p>
              <p className={styles.subTitle}>{props.subTitle}</p>
              <Button text={props.text} style={styles.button}></Button>
            </div>
            <img src={props.image} alt="" />
          </div>
        ) : (
          <div className={styles.wrapper}>
            <img src={props.image} alt="" />
            <div className={styles.info}>
              <p className={styles.name}>{props.name}</p>
              <p className={styles.title}>{props.title}</p>
              <p className={styles.subTitle}>{props.subTitle}</p>
              <Button text={props.text} style={styles.button}></Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;

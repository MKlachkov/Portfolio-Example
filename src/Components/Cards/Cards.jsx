import React from "react";
import styles from "./Cards.module.scss";
function Section(props) {
  return (
    <div className={styles.cards}>
      <div className="container">
        <div className={styles.wrapper}>
          {props.list.map((item) => (
            <div className={styles.card}>
                <img className={styles.cardImage} src={item.image} alt="" />
                <p className={styles.card__text}>{item.text}</p>
                <p className={styles.card__name}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;

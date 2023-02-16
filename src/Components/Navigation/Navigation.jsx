import React from "react";
import styles from './Navigation.module.scss';
const Navigation = (props) => {
  const nav = props.nav;
  return (
    <ul className={styles.navigation}>
      {nav.map((item) => (
        <li key={item.title}>
            <a href={item.href}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

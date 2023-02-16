import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../../assets/Logo.png";
import Background from "../../assets/BackGroudImage.jpg";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
const nav = [
  {
    title: "Sounds",
    href: "#",
  },
  {
    title: "Skills",
    href: "#",
  },
  {
    title: "Plugins",
    href: "#",
  },
  {
    title: "Studio",
    href: "#",
  },
  {
    title: "Community",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
];
const buttons = [
  {
    text: "Login",
    style: styles.button__wb,
  },
  {
    text: "Sign up",
    style: styles.button_b,
  }
];
const Content = {
  title: "Step into the producer’s playground",
  subTitle:
    "Explore the world’s best sample library and an unmatched marketplace of plugins and DAWs.",
};
function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.wrapper}>
            <img src={Logo} alt="" />
            <Navigation nav={nav}></Navigation>
          </div>
          <div className={styles.wrapper}>
            {buttons.map((item, index) => (
              <Button
                key={item.text}
                text={item.text}
                style={item.style}
              ></Button>
            ))}
          </div>
        </nav>
      </div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          width: "100%",
          height: "744px",
          paddingTop: "20%",
          color: "#fff",
        }}
      >
        <div className="container">
          <h1 className={styles.title}>{Content.title}</h1>
          <h2 className={styles.subTitle}>{Content.subTitle}</h2>
          <Button text="Try free" style={styles.button_tr}></Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

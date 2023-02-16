import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Footer.module.scss";

const footerNav = [
  {
    id: 1,
    title: "Skills",
    items: ["Features", "Catalog"],
  },
  {
    id: 2,
    title: "Community",
    items: [
      "Ableton Live Projects",
      "FL Studio Projects",
      "Logic Pro X Projects",
      "Garageband Projects",
      "Remix Contests",
      "Tiesto's Secrets",
    ],
  },
  {
    id: 3,
    title: "Sounds",
    items: [
      "Features",
      "Catalog",
      "How Jauz Uses Sounds",
      "deadmau5's Chimaera",
      "KSHMR Vol. 2",
    ],
  },
  {
    id: 4,
    title: "Plugins",
    items: [
      "Top VSTs",
      "Serum",
      "Rent to Own",
      "Free Plugins",
      "Top Manufacturers",
    ],
  },
  {
    id: 5,
    title: "Beatmaker",
    items: ["Create Your Own Beat", "Wakapella", "Just Blaze"],
  },
  {
    id: 6,
    title: "Blog",
    items: [
      "Latest Posts",
      "Using Soundtoys Decapitator",
      "Mastering 101",
      "Producing Future Beats",
      "Belonging @ Splice",
    ],
  },
];
const nav = [
  {
    title: "Terms of Use",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
];
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          {footerNav.map((item) => (
            <div>
              <p className={styles.row__title}>{item.title}</p>
              {item.items.map((j) => (
                <p key={item.id} className={styles.row__item}>
                  {j}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.footer__bottom}>
          <p>© 2022 Splice.com All Rights Reserved</p>
          <Navigation nav={nav}></Navigation>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import classes from "./Footer.module.css";
import { socialIcons } from "./SocialIcons";

const Footer = () => {
  const addIcons = (
    <>
      <ul className={classes.footerLinks}>
        {socialIcons.map((item) => {
          const { id, icon, url } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <footer className={classes.wrapper}>
      <h5>
        &copy; {new Date().getFullYear()}
        <span className={classes.copyright}>GeorgianMeals</span>
      </h5>
      <h5>
        All rights reserved by{" "}
        <span className={classes.copyright}>Goga Imerlishvili</span>
      </h5>
      <div className={classes.icons}>{addIcons}</div>
    </footer>
  );
};

export default Footer;

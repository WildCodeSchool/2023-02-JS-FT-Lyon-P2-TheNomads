import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.foot}>
      <h1 className={styles.contact}>
        <a href="mailto:thenomadsp2@gmail.com">Contact</a>
      </h1>

      <Link to="/team">
        <h1 className={styles.team}>Our team</h1>
      </Link>
    </div>
  );
}
export default Footer;

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.foot}>
      <h1 className={styles.contact}>Contact: thenomadsp2@gmail.com</h1>
      <h1 className={styles.team}>Our team</h1>
    </div>
  );
}
export default Footer;

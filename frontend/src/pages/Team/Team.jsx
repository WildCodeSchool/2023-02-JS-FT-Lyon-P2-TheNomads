import styles from "./Team.module.css";
import logo from "../../assets/logoexpat.png";
import Jawad from "../../assets/Jawad.png";
import Marcelo from "../../assets/Marcelo.png";
import Vanessa from "../../assets/Vanessa.png";

export default function Team() {
  return (
    <div className={styles.teampage}>
      <div className={styles.logo}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </a>
      </div>

      <div className={styles.slogan}>
        <h1>One project, one community</h1>
      </div>

      <div className={styles.team}>
        <div>
          <h1 className={styles.Marcelo}>Marcelo</h1>
          <img className={styles.Marceloimg} src={Marcelo} alt="Marcelo" />
        </div>

        <div>
          <h1 className={styles.Vanessa}>Vanessa</h1>
          <img className={styles.Vanessaimg} src={Vanessa} alt="Vanessa" />
        </div>

        <div>
          <h1 className={styles.Jawad}>Jawad</h1>
          <img className={styles.Jawadimg} src={Jawad} alt="Jawad" />
        </div>
      </div>
    </div>
  );
}

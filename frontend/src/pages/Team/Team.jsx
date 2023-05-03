import styles from "./Team.module.css";
import Footer from "../../Footer";
import logo from "../../assets/logoexpat.png";
import Jawad from "../../assets/Jawad.png";
import Marcelo from "../../assets/Marcelo.png";
import Vanessa from "../../assets/Vanessa.png";

export default function Team() {
  return (
    <>
      <div className={styles.teampage}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className={styles.slogan}>
          <h1>One project, one community</h1>
        </div>

        <div className={styles.team}>
          <div>
            <h1 className={styles.Marcelo}>Marcelo</h1>
            <img src={Marcelo} alt="Marcelo" />
          </div>

          <div>
            <h1 className={styles.Vanessa}>Vanessa</h1>
            <img src={Vanessa} alt="Vanessa" />
          </div>

          <div>
            <h1 className={styles.Jawad}>Jawad</h1>
            <img src={Jawad} alt="Jawad" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import Link from "next/link";
import styles from "../api/styles/menu.module.css";

export default function About() {
  return (
    <main>
      <h3 className={styles.main_h3}>Escoja el servicio que va a realizar</h3>
      <nav className={styles.navega}>
        <ul className={styles.menuV}>
          <li>
            {" "}
            <Link href="/Tramites">RNA</Link>
          </li>
          <li>RNC</li>
          <li>RNRYS</li>
        </ul>
      </nav>
    </main>
  );
}

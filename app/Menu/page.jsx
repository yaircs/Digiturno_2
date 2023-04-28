import Image from "next/image";
import Link from "next/link";
import styles from "/app/api/styles/menu.module.css";

export default function Menu() {
  return (
    <main>
      <div>
        <Image src="/Logo.png" alt="Logo Transito" width={370} height={100} />
      </div>
      <h3 className={styles.main_h3}>Escoja el servicio que va a realizar</h3>
      <nav className={styles.navega}>
        <ul className={styles.menuV}>
          <li>
            {" "}
            <Link href="/Tramites">
              {" "}
              Tramites{" "}
              <small className={styles.sub}>
                <em> RNA, RNC, RNRYS, RNMA</em>
              </small>
            </Link>
          </li>
          <li>Caja</li>
          <li>Coactivo</li>
        </ul>
      </nav>
    </main>
  );
}

import Link from "next/link.js";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link className={styles.links} href="/">
          Home
        </Link>
        <Link className={styles.links} href="/about">
          About
        </Link>
        <Link className={styles.links} href="/profile">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

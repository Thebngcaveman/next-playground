import Link from "next/link.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/about">About</Link>
      <h1 className={styles.homePageTitle}>Hello world</h1>
    </div>
  );
}

import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className="text-label">Rayvix Digital</p>
        <h1 className={styles.heroTitle}>
          Elevated Growth
          <br />
          <span className={styles.heroAccent}>Experiences</span>
        </h1>
        <p className={styles.heroDescription}>
          A premium creative, web development, marketing and digital systems
          studio — crafting brands that command attention and drive results.
        </p>
        <div className={styles.heroDivider} />
      </div>
    </section>
  );
}

import type { MainLayoutProps } from "./types";
import styles from "./styles.module.css";

export default function MainLayout(props: MainLayoutProps) {
  return (
    <main className={styles["main-layout"]}>
      <header></header>
      <div>
        <aside></aside>
        <article>{props.children}</article>
      </div>
    </main>
  );
}

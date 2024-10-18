import type { MainLayoutProps } from "./types";
import * as styles from "./styles.module.css";

export default function MainLayout(props: MainLayoutProps) {
  return (
    <main className={styles["main-layout"]}>
      <header className={styles["header"]}>slm</header>
      <div className={styles["container"]}>
        <aside></aside>
        <article>{props.children}</article>
      </div>
    </main>
  );
}

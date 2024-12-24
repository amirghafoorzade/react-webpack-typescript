import type { MainLayoutProps } from "./types";
import { Header } from "./components/header";
import { Aside } from "./components/aside";
import styles from "./styles.module.css";

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className={styles["main-layout"]}>
      <Header />
      <div className={styles["content-layout"]}>
        <Aside />
        <div className={styles["content-wrapper"]}>{props.children}</div>
      </div>
    </div>
  );
};

export { MainLayout };

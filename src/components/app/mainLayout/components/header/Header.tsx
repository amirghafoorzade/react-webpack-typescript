import Menu from "@/assets/icons/menu.svg";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <button className={styles["menu-button"]}>
        <Menu style={{ width: "2rem", height: "2rem" }} />
      </button>
    </header>
  );
};

export { Header };

import type { IconProps } from "./types";
import styles from "./styles.module.scss";

function Icon(props: IconProps) {
  return <span className={styles["icon"]}>{props.icon}</span>;
}

export { Icon };

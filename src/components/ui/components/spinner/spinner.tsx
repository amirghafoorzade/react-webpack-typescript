import type { SpinnerProps } from "./types";

import { cn } from "../../libs";
import { DEFAULT_SIZE } from "./constants";
import styles from "./styles.module.scss";

function Spinner({ size = DEFAULT_SIZE, ...props }: SpinnerProps) {
  return <div className={cn(styles["spinner"], styles[size])} {...props} />;
}

export { Spinner };

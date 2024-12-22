import type { InputProps } from "./types";

import { forwardRef } from "react";
import styles from "./styles.module.scss";

const Input = forwardRef<HTMLInputElement>((props: InputProps, ref) => {
  return <input ref={ref} className={styles["input"]} {...props} />;
});

export { Input };

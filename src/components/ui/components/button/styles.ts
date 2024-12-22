import type { ButtonStylesArgs } from "./types";

import { cn } from "../../libs";
import { DEFAULT_VARIANT } from "./constants";
import styles from "./styles.module.scss";

function buttonStyles({
  variant = DEFAULT_VARIANT,
  loading,
  disabled,
}: ButtonStylesArgs) {
  return cn(styles["button"], styles[variant], {
    [styles["disabled"]]: loading || disabled,
  });
}

export { buttonStyles };

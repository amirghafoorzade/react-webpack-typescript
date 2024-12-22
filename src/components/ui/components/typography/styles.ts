import type { TypographyStylesArgs } from "./types";

import { cn } from "../../libs";
import { DEFAULT_SIZE, DEFAULT_VARIANT } from "./constants";
import styles from "./styles.module.scss";

function typographyStyles({
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
}: TypographyStylesArgs) {
  return cn(styles["typography"], styles[variant], styles[size]);
}

export { typographyStyles };

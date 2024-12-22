import type { TypographyProps } from "./types";

import { cn } from "../../libs";
import { DEFAUTL_COMPONENT, DEFAULT_SIZE, DEFAULT_VARIANT } from "./constants";
import { typographyStyles } from "./styles";

function Typography({
  component: Component = DEFAUTL_COMPONENT,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(typographyStyles({ variant, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Typography };

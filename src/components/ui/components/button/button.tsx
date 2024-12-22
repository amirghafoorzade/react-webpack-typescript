import type { ButtonComponent, ButtonProps } from "./types";

import { cn } from "../../libs";
import { typographyStyles } from "../typography";
import { Spinner } from "../spinner";
import { DEFAULT_COMPONENT, DEFAULT_VARIANT } from "./constants";
import { buttonStyles } from "./styles";

function Button<C extends ButtonComponent = "button">({
  component: Component = DEFAULT_COMPONENT,
  variant = DEFAULT_VARIANT,
  loading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps<C>) {
  return (
    <Component
      className={cn(
        typographyStyles({ variant: "label", size: "medium" }),
        buttonStyles({ variant, loading, disabled }),
        className,
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && <Spinner size="small" />}
      {children}
    </Component>
  );
}

export { Button };

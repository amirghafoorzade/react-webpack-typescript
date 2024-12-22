type ButtonComponent = React.ElementType;
type ButtonVariant = "filled";

type ButtonProps<C extends ButtonComponent> = Readonly<{
  component?: C;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: string;
}> &
  React.ComponentProps<C>;

type ButtonStylesArgs = Readonly<{
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
}>;

export type { ButtonProps, ButtonStylesArgs, ButtonComponent, ButtonVariant };

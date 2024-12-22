type TypographyComponent = React.ElementType;
type TypographyVariant = "display" | "headline" | "title" | "body" | "label";
type TypographySizes = "large" | "medium" | "small";

type TypographyProps = Readonly<{
  component?: TypographyComponent;
  variant?: TypographyVariant;
  size?: TypographySizes;
  className?: string;
  style?: React.CSSProperties;
  children: string;
}>;

type TypographyStylesArgs = Readonly<{
  variant?: TypographyVariant;
  size?: TypographySizes;
}>;

export type {
  TypographyProps,
  TypographyStylesArgs,
  TypographyComponent,
  TypographyVariant,
  TypographySizes,
};

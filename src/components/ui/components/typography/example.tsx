import { Typography } from "./typography";
import type { TypographyProps } from "./types";

const variants: TypographyProps["variant"][] = [
  "display",
  "headline",
  "title",
  "body",
  "label",
];
const sizes: TypographyProps["size"][] = ["large", "medium", "small"];
const text = "سلام دنیا";

function TypographyExample() {
  return (
    <>
      {variants.map((variant) =>
        sizes.map((size) => (
          <div style={{ marginBottom: "2rem" }}>
            <label>{variant! + " " + size!}</label>
            <Typography
              key={variant + "_" + size}
              variant={variant}
              size={size}
            >
              {text}
            </Typography>
          </div>
        )),
      )}
    </>
  );
}

export { TypographyExample };

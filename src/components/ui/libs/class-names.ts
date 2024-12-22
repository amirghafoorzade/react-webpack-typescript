type ClassNamesObject = Readonly<{
  [K: string]: boolean | null | undefined;
}>;
type ClassNamesArgv = null | undefined | string | ClassNamesObject;

function cn(...classNames: ClassNamesArgv[]) {
  return classNames
    .map((className) => {
      if (!className) return "";
      if (typeof className === "string") return className;
      return Object.keys(className)
        .filter((value) => className[value])
        .join(" ");
    })
    .join(" ");
}

export { cn };

import classnames from "classnames";
import "./BorderCard.css";
import React, { PropsWithChildren, useEffect, useRef } from "react";

type CardProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  borderColor?: string;
} & React.ComponentPropsWithoutRef<C>;

export const BorderCard = <C extends React.ElementType = "p">({
  as,
  className,
  children,
  borderColor,
  backgroundColor,
  ...props
}: PropsWithChildren<
  CardProps<C> & { borderColor?: string; backgroundColor?: string }
>) => {
  // add borderColor to the type
  const Component = as || "div";
  const classes = classnames("ai_Box", "cardBorder", "card", className);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && borderColor) {
      (ref.current as HTMLElement).style.setProperty(
        "--card-border-color",
        borderColor,
      );
    }
    if (ref.current && backgroundColor) {
      (ref.current as HTMLElement).style.setProperty(
        "--card-background-color",
        backgroundColor,
      );
    }
  }, [borderColor, backgroundColor]);

  return (
    <Component {...props} className={classes} ref={ref}>
      <div className={"ai_cardContent"}>{children}</div>
    </Component>
  );
};

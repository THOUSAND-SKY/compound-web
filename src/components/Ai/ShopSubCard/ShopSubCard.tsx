import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import "./ShopSubCard.css";
import { Card } from "../Card/Card";

type ShopItemProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
} & React.ComponentPropsWithoutRef<C>;

export const ShopSubCard = <C extends React.ElementType = "p">({
  as,
  className,
  borderColor,
  backgroundColor,
  ...props
}: PropsWithChildren<ShopItemProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", className);
  return (
    <Component {...props} className={classes}>
      <Card borderColor={borderColor} backgroundColor={backgroundColor}>
        <div className={"card-child-content"}>
          <img
            className={"sub-image"}
            src="https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/yYNOFJkjAoNBbPuq.png"
          ></img>
          <p className={"deal-quantity"}>SENTIENT AI</p>
          <p className={"deal-desc"}>
            Choose your own sentient AI&apos;s and more!
          </p>
        </div>
      </Card>
    </Component>
  );
};

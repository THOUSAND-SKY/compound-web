import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import "./ShopItem.css";
import { Card } from "../Card/Card";

type ShopItemProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
} & React.ComponentPropsWithoutRef<C>;

export const ShopItem = <C extends React.ElementType = "p">({
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
            className={"deal-image"}
            src="https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/bnBeetvybGsHffnI.png"
          ></img>
          <p className={"deal-quantity"}>1</p>
          <p className={"deal-desc"}>+0.2 VIP EXP</p>
        </div>
        <div className={"card-footer"}>
          <img src=""></img>
          <p>Free</p>
        </div>
      </Card>
    </Component>
  );
};

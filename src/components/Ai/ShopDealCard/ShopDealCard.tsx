import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import "./ShopDealCard.css";
import { Card } from "../Card/Card";

type ShopItemProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
} & React.ComponentPropsWithoutRef<C>;

export const ShopDealCard = <C extends React.ElementType = "p">({
  as,
  className,
  ...props
}: PropsWithChildren<ShopItemProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", className);
  return (
    <Component {...props} className={classes}>
      <Card
        borderColor={
          "linear-gradient(to bottom, #7aabca 0%, #3d588c 33%, #4a7693 66%, #3f4b62 100%);"
        }
        backgroundColor={"linear-gradient(to bottom, #22262f 0%, #293449 100%)"}
      >
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

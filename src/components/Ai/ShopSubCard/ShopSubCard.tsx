import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import "./ShopSubCard.css";
import { Card } from "../Card/Card";
import { Button } from "../../Button/Button";

type ShopItemProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
} & React.ComponentPropsWithoutRef<C>;

export const ShopSubCard = <C extends React.ElementType = "p">({
  as,
  className,
  ...props
}: PropsWithChildren<ShopItemProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", className);
  return (
    <Component {...props} className={classes}>
      <Card
        borderColor={"#4364a9"}
        backgroundColor={"linear-gradient(to bottom, #111a30 0%, #194260 100%)"}
      >
        <img
          className={"sub-image"}
          src="https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/yYNOFJkjAoNBbPuq.png"
        ></img>
        <div className={"card-child-content"}>
          <p className={"sub-title"}>SENTIENT AI</p>
          <p className={"sub-desc"}>
            Choose your own sentient AI&apos;s and more!
          </p>
          <Button
            style={{
              width: 250,
              height: 30,
              margin: "auto",
              minBlockSize: 0,
              fontSize: 14,
              backgroundColor: "rgba(59, 95, 121, 1)",
              marginBottom: 5,
            }}
          >
            VIEW BENEFITS
          </Button>
        </div>
      </Card>
    </Component>
  );
};

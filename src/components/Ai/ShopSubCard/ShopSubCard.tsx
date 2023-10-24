import classnames from "classnames";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import "./ShopSubCard.css";
import { Card } from "../Card/Card";
import { Button } from "../../Button/Button";

export enum Product {
  Plus = "Plus",
  Unlimited = "Unlimited",
}

type ShopItemProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  product: Product;
} & React.ComponentPropsWithoutRef<C>;

type ProductType = {
  tagGlow?: boolean;
  tagColor: string;
  tagText: string;
  backgroundColor: string;
  img: string;
  buttonColor: string;
};

function getProductType(product: Product): ProductType {
  switch (product) {
    case Product.Plus:
      return {
        tagGlow: false,
        tagColor: "linear-gradient(#e6d225, #c89b24)",
        tagText: "Plus +",
        backgroundColor: "linear-gradient(to bottom, #111a30 0%, #194260 100%)",
        img: "https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/yYNOFJkjAoNBbPuq.png",
        buttonColor: "rgba(59, 95, 121, 1)",
      };
    case Product.Unlimited:
      return {
        tagGlow: true,
        tagColor: "linear-gradient(#5c24c0, #2e61e0)",
        tagText: "Unlimited",
        backgroundColor: "radial-gradient(#2a4456 1%, #12101a 60%)",
        img: "https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/zBtCuXGKcueQjwED.png",
        buttonColor: "rgba(47, 46, 52, 1)",
      };
    default:
      throw new Error("Invalid product");
  }
}

export const ShopSubCard = <C extends React.ElementType = "p">({
  as,
  className,
  product,
  ...props
}: PropsWithChildren<ShopItemProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", className);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { tagGlow, tagColor, tagText, backgroundColor, img, buttonColor } =
    getProductType(product);

  return (
    <Component {...props} className={classes}>
      <Card
        borderColor={"linear-gradient(to bottom, #4264a9 0%, #386786 100%)"}
        backgroundColor={backgroundColor}
      >
        <img className={"sub-image"} src={img}></img>
        <div className={"card-child-content"}>
          <span
            style={{
              display: "flex",
              margin: "auto auto",
              textAlign: "center",
            }}
          >
            <p className={"sub-title"}>SENTIENT AI</p>
            <div
              className={"tag"}
              style={{
                background: tagColor,
                boxShadow: tagGlow ? "0px 0px 20px 2px #6a4bff" : "none",
                color: tagGlow ? "#fff" : "initial",
              }}
            >
              {tagText}
            </div>
          </span>

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
              borderColor: isHovered
                ? buttonColor.replace("1)", "0.5)")
                : buttonColor,
              background: isHovered
                ? buttonColor.replace("1)", "0.5)")
                : buttonColor,
              marginBottom: 5,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            VIEW BENEFITS
          </Button>
        </div>
      </Card>
    </Component>
  );
};

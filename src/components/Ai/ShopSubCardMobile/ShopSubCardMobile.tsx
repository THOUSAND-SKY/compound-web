import classnames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import "./ShopSubCardMobile.css";
import { Button } from "../../Button/Button";

export enum Product {
  Plus = "Plus",
  Unlimited = "Unlimited",
}

type ShopItemProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  product: Product;
  isMobile: boolean;
} & React.ComponentPropsWithoutRef<C>;

type ProductType = {
  tagGlow?: boolean;
  tagColor: string;
  tagText: string;
  backgroundColor: string;
  img: string;
  buttonColor: string;
  fogColor?: string;
};

function getProductType(product: Product): ProductType {
  switch (product) {
    case Product.Plus:
      return {
        tagGlow: false,
        tagColor: "linear-gradient(#e6d225, #c89b24)",
        tagText: "Plus +",
        backgroundColor: "linear-gradient(180deg, #11152b 0%, #20405b 100%)",
        img: "https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1123/TXJOMQtjyNMHgukE.png",
        buttonColor: "rgba(59, 95, 121, 1)",
        fogColor:
          "radial-gradient(150% 12% at 10% 80%, #2B4A61FF 0%, #00000000 100%),radial-gradient(20% 18% at 90% 73%, #2B4A61FF 0%, #00000000 100%),radial-gradient(20% 24% at 28% 85%, #2B4A61FF 0%, #00000000 100%),radial-gradient(20% 22% at 76% 87%, #2B4A61FF 0%, #00000000 100%),radial-gradient(20% 16% at 10% 74%, #2B4A61FF 0%, #00000000 100%),radial-gradient(40% 21% at 56% 79%, #2B4A61FF 0%, #00000000 100%)",
      };
    case Product.Unlimited:
      return {
        tagGlow: true,
        tagColor: "linear-gradient(#5c24c0, #2e61e0)",
        tagText: "Unlimited",
        backgroundColor: "linear-gradient(180deg, #13111a 0%, #262B47FF 100%)",
        img: "https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1123/gNjLgYiwoRGwASDv.png",
        buttonColor: "rgba(47, 46, 52, 1)",
        fogColor:
          "radial-gradient(150% 12% at 10% 80%, #242a45 0%, #00000000 100%),radial-gradient(20% 18% at 90% 73%, #242a45 0%, #00000000 100%),radial-gradient(20% 24% at 28% 85%, #242a45 0%, #00000000 100%),radial-gradient(20% 22% at 61% 84%, #242a45 0%, #00000000 100%),radial-gradient(20% 16% at 10% 74%, #242a45 0%, #00000000 100%),radial-gradient(40% 21% at 56% 79%, #242a45 0%, #00000000 100%)",
      };
    default:
      throw new Error("Invalid product");
  }
}

export const ShopSubCardMobile = <C extends React.ElementType = "p">({
  as,
  className,
  product,
  ...props
}: PropsWithChildren<ShopItemProps<C>>) => {
  const Component = as || "div";
  const classes = classnames(className);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const {
    tagGlow,
    tagColor,
    tagText,
    backgroundColor,
    img,
    buttonColor,
    fogColor,
  } = getProductType(product);

  return (
    <Component
      style={{
        height: 170,
        maxWidth: 550,
        textAlign: "start",
      }}
      {...props}
      className={classes}
    >
      <div
        className={"ai_Box cardBorderMobile cardBorderMobile"}
        style={{ borderRadius: "1rem", padding: "0.1rem" }}
      >
        <div
          className={"ai_cardContentMobile"}
          style={{ backgroundImage: backgroundColor, borderRadius: "0.9rem" }}
        >
          <div className={"fog"} style={{ backgroundImage: fogColor }}></div>
          <img className={"subImageMobile"} src={img}></img>
          <div className={"cardChildContentMobile"}>
            <span
              style={{
                display: "flex",
                textAlign: "start",
              }}
            >
              <p className={"subTitleMobile"}>SENTIENT AI</p>
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

            <p className={"subDescMobile"}>
              Choose your own sentient AI&apos;s and more!
            </p>
            <Button
              style={{
                width: 250,
                height: 40,
                marginTop: "1rem",
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
        </div>
      </div>
    </Component>
  );
};

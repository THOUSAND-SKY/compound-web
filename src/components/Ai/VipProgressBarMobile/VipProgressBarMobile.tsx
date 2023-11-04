import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import "./VipProgressBarMobile.css";
import { VipProgressBar } from "../VipProgressBar/VipProgressBar";

type VipProgressBarProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  progressCount: number;
} & React.ComponentPropsWithoutRef<C>;

export const VipProgressBarMobile = <C extends React.ElementType = "p">({
  as,
  className,
  ...props
}: PropsWithChildren<VipProgressBarProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", className);

  return (
    <Component {...props} className={classes}>
      <div
        style={{
          backgroundImage: `url("https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1123/CLZvDBtRxorvkBKS.png")`,
          width: "100vw",
          height: "4rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url("https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/OZbQjqVKnJKsWVDt.png")`,
            width: "3.5rem",
            height: "3.5rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            position: "absolute",
            top: "0.5rem",
            left: "0.7rem",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: "5rem",
          }}
        >
          <p
            style={{
              color: "white",
              margin: 0,
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            Acquire <span className={"text-gradient"}>50</span>
            VIP EXP to reach VIP 2
          </p>
          <VipProgressBar progressCount={50} style={{ width: "60vw" }} />
        </div>
        <button
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="20px"
            height="20px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </Component>
  );
};

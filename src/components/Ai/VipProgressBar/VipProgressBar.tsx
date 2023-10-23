import classnames from "classnames";
import React, { PropsWithChildren, useEffect, useState } from "react";
import "./VipProgressBar.css";
import { Card } from "../Card/Card";

type VipProgressBarProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  borderColor?: string;
  backgroundColor?: string;
  progressBarWidth?: string;
} & React.ComponentPropsWithoutRef<C>;

export const VipProgressBar = <C extends React.ElementType = "p">({
  as,
  className,
  progressBarWidth,
  ...props
}: PropsWithChildren<VipProgressBarProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", className);
  const [progress] = useState(50);
  const [maxProgress] = useState(100);

  useEffect(() => {
    if (progressBarWidth != null) {
      document.documentElement.style.setProperty(
        "--progress-fill-width",
        `${(progress / maxProgress) * parseInt(progressBarWidth)}px`,
      );
    }
  }, [progress]);

  return (
    <div style={{ marginLeft: 20 }}>
      <Component {...props} className={classes}>
        <img
          className={"vip-image"}
          src="https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/OZbQjqVKnJKsWVDt.png"
        ></img>
        <Card
          borderColor={"#9e8e63"}
          backgroundColor={
            "linear-gradient(to bottom, #251a1f 0%, #3f1f25 100%)"
          }
        >
          <div className={"vip-progress-fill"}></div>
          <p className={"vip-progress-text"}>
            {progress}/{maxProgress}
          </p>
        </Card>
      </Component>
    </div>
  );
};

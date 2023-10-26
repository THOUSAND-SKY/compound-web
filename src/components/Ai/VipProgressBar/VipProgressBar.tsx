import classnames from "classnames";
import React, { PropsWithChildren, useEffect, useState } from "react";
import "./VipProgressBar.css";
import { BorderCard } from "../BorderCard/BorderCard";

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
  ...props
}: PropsWithChildren<VipProgressBarProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", className);
  const [progress] = useState(5);
  const [maxProgress] = useState(100);
  const progressBarRef = React.useRef<HTMLDivElement>(null);
  const [progressBarHeight, setProgressBarHeight] = useState(0);

  useEffect(() => {
    if (progressBarRef.current) {
      const progressBarWidth = progressBarRef.current.offsetWidth;
      setProgressBarHeight(progressBarRef.current.offsetHeight - 8);
      let progressAdjusted;
      if (progress < 5) {
        progressAdjusted = 5;
      } else if (progress > 98) {
        progressAdjusted = 99;
      } else {
        progressAdjusted = progress;
      }
      const width =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (progressAdjusted / maxProgress) * parseInt(progressBarWidth);

      document.documentElement.style.setProperty(
        "--progress-fill-width",
        `${width}px`,
      );
    }
  }, [progress]);

  return (
    <div style={{ marginLeft: 20 }} ref={progressBarRef}>
      <Component {...props} className={classes}>
        <img
          className={"vipImage"}
          src="https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/OZbQjqVKnJKsWVDt.png"
          style={{
            height: `${progressBarHeight + 28}px`,
            width: `${progressBarHeight + 28}px`,
          }}
        ></img>
        <BorderCard
          borderColor={"#9e8e63"}
          backgroundColor={
            "linear-gradient(to bottom, #251a1f 0%, #3f1f25 100%)"
          }
        >
          <div
            className={"vipProgressFill"}
            style={{ height: `${progressBarHeight}px` }}
          ></div>
          <p className={"vipProgressText"}>
            {progress}/{maxProgress}
          </p>
        </BorderCard>
      </Component>
    </div>
  );
};

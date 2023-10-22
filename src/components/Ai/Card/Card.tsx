/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import classnames from "classnames";
import "./Card.css";
import React, { PropsWithChildren, useEffect, useRef } from "react";

type CardProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  borderColor?: string;
} & React.ComponentPropsWithoutRef<C>;

export const Card = <C extends React.ElementType = "p">({
  as,
  className,
  children,
  borderColor, // add borderColor prop
  ...props
}: PropsWithChildren<CardProps<C> & { borderColor?: string }>) => {
  // add borderColor to the type
  const Component = as || "div";
  const classes = classnames("ai_Box", "card-border", "card", className);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && borderColor) {
      (ref.current as HTMLElement).style.setProperty(
        "--card-border-color",
        borderColor,
      );
    }
  }, [borderColor]);

  return (
    <Component {...props} className={classes} ref={ref}>
      <div className={"card-content"}>{children}</div>
    </Component>
  );
};

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
import React, { PropsWithChildren } from "react";
import "./ShopItem.css";

type ShopItemProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  img: {
    src: string;
    alt: string;
  };
} & React.ComponentPropsWithoutRef<C>;

export const ShopItem = <C extends React.ElementType = "p">({
  as,
  children,
  className,
  img,
  ...props
}: PropsWithChildren<ShopItemProps<C>>) => {
  const Component = as || "div";
  const classes = classnames("ai_Box", "card", className);
  return (
    <Component {...props} className={classes}>
      <figure>
        <img {...img} />
      </figure>
      <div className={"cardContent"}>{children}</div>
    </Component>
  );
};

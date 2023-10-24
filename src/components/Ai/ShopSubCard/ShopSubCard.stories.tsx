import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ShopSubCard as ShopSubCardComponent, Product } from "./ShopSubCard";

export default {
  title: "ShopSubCard",
  component: ShopSubCardComponent,
  argTypes: {},
  args: {},
} as Meta<typeof ShopSubCardComponent>;

const Template: StoryFn<typeof ShopSubCardComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <ShopSubCardComponent
      product={Product.Plus}
      {...args}
    ></ShopSubCardComponent>

    <ShopSubCardComponent
      product={Product.Unlimited}
      {...args}
    ></ShopSubCardComponent>
  </div>
);

export const ShopSubCardPlus = Template.bind({});
ShopSubCardPlus.args = {
  style: {
    width: "350px",
    height: "200px",
  },
};

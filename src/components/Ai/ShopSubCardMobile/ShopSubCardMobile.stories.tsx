import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import {
  ShopSubCardMobile as ShopSubCardMobileComponent,
  Product,
} from "./ShopSubCardMobile";

export default {
  title: "ShopSubCardMobile",
  component: ShopSubCardMobileComponent,
  argTypes: {},
  args: {},
} as Meta<typeof ShopSubCardMobileComponent>;

const Template: StoryFn<typeof ShopSubCardMobileComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <ShopSubCardMobileComponent
      product={Product.Plus}
      {...args}
    ></ShopSubCardMobileComponent>

    <ShopSubCardMobileComponent
      product={Product.Unlimited}
      {...args}
    ></ShopSubCardMobileComponent>
  </div>
);

export const ShopSubDesktop = Template.bind({});
ShopSubDesktop.args = {
  style: {
    width: "450px",
    height: "170px",
  },
};

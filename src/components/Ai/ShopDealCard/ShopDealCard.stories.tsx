import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ShopDealCard as ShopDealCardComponent } from "./ShopDealCard";

export default {
  title: "ShopDealCards",
  component: ShopDealCardComponent,
  argTypes: {},
  args: {},
} as Meta<typeof ShopDealCardComponent>;

const Template: StoryFn<typeof ShopDealCardComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <ShopDealCardComponent {...args}></ShopDealCardComponent>

    <ShopDealCardComponent {...args}></ShopDealCardComponent>
  </div>
);

export const CryptonDeal = Template.bind({});
CryptonDeal.args = {
  style: {
    width: "350px",
    height: "400px",
  },
};

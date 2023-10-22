import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ShopItem as ShopItemComponent } from "./ShopItem";

export default {
  title: "Shop",
  component: ShopItemComponent,
  argTypes: {},
  args: {},
} as Meta<typeof ShopItemComponent>;

const Template: StoryFn<typeof ShopItemComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <ShopItemComponent {...args}></ShopItemComponent>

    <ShopItemComponent {...args}></ShopItemComponent>
  </div>
);

export const CryptonDeal = Template.bind({});
CryptonDeal.args = {
  style: {
    width: "350px",
    height: "400px",
  },
  borderColor:
    "linear-gradient(to bottom, #7aabca 0%, #3d588c 33%, #4a7693 66%, #3f4b62 100%)",
  backgroundColor: "linear-gradient(to bottom, #22262f 0%, #293449 100%)",
};

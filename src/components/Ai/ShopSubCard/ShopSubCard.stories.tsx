import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { ShopSubCard as ShopSubCardComponent } from "./ShopSubCard";

export default {
  title: "ShopSubCard",
  component: ShopSubCardComponent,
  argTypes: {},
  args: {},
} as Meta<typeof ShopSubCardComponent>;

const Template: StoryFn<typeof ShopSubCardComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <ShopSubCardComponent {...args}></ShopSubCardComponent>

    <ShopSubCardComponent {...args}></ShopSubCardComponent>
  </div>
);

export const ShopSubCardPlus = Template.bind({});
ShopSubCardPlus.args = {
  style: {
    width: "350px",
    height: "400px",
  },
  borderColor:
    "linear-gradient(to bottom, #7aabca 0%, #3d588c 33%, #4a7693 66%, #3f4b62 100%)",
  backgroundColor: "linear-gradient(to bottom, #22262f 0%, #293449 100%)",
};

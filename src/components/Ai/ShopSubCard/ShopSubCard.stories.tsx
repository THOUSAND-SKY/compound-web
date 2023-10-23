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
    height: "200px",
  },
};

import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Card as CardComponent } from "./Card";

export default {
  title: "Card",
  component: CardComponent,
  argTypes: {},
  args: {},
} as Meta<typeof CardComponent>;

const Template: StoryFn<typeof CardComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <CardComponent {...args}></CardComponent>

    <CardComponent {...args}></CardComponent>
  </div>
);

export const CardYeet = Template.bind({});
CardYeet.args = {
  style: {
    width: "350px",
    height: "400px",
  },
  borderColor: "",
  backgroundColor: "",
};

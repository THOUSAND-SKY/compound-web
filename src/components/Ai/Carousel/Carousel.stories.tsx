import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Carousel as CarouselComponent } from "./Carousel";

export default {
  title: "Carousel",
  component: CarouselComponent,
  argTypes: {},
  args: {},
} as Meta<typeof CarouselComponent>;

const Template: StoryFn<typeof CarouselComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <CarouselComponent {...args}></CarouselComponent>
  </div>
);

export const CarouselYeet = Template.bind({});
CarouselYeet.args = {
  style: {
    width: "450px",
    height: "40px",
  },
  progressBarWidth: "450px",
};

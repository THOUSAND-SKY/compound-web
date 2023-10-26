import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { VipProgressBar as VipProgressBarComponent } from "./VipProgressBar";

export default {
  title: "VipProgressBar",
  component: VipProgressBarComponent,
  argTypes: {},
  args: {},
} as Meta<typeof VipProgressBarComponent>;

const Template: StoryFn<typeof VipProgressBarComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <VipProgressBarComponent {...args}></VipProgressBarComponent>

    {/*<VipProgressBarComponent {...args}></VipProgressBarComponent>*/}
  </div>
);

export const VipProgressBarYeet = Template.bind({});
VipProgressBarYeet.args = {
  style: {
    width: "850px",
    height: "30px",
  },
  progressCount: 50,
};

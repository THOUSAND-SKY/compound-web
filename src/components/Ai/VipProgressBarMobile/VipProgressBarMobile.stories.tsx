import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { VipProgressBarMobile as VipProgressBarComponentMobile } from "./VipProgressBarMobile";

export default {
  title: "VipProgressBarMobile",
  component: VipProgressBarComponentMobile,
  argTypes: {},
  args: {},
} as Meta<typeof VipProgressBarComponentMobile>;

const Template: StoryFn<typeof VipProgressBarComponentMobile> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <VipProgressBarComponentMobile {...args}></VipProgressBarComponentMobile>

    {/*<VipProgressBarComponentMobile {...args}></VipProgressBarComponentMobile>*/}
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

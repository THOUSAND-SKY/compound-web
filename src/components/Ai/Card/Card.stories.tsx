/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
  borderColor:
    "linear-gradient(to bottom, rgb(0 212 255 / 100%) 0%, rgb(9 9 121 / 100%) 33%, rgb(5 96 179 / 100%) 63%, rgb(2 0 36 / 100%) 100%)",
  backgroundColor:
    "linear-gradient(to bottom, rgb(34 38 47) 0%, rgb(57 60 68) 100%)",
};

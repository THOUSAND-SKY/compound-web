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

import { ShopItem as ShopItemComponent } from "./ShopItem";

export default {
  title: "ShopItem",
  component: ShopItemComponent,
  argTypes: {},
  args: {},
} as Meta<typeof ShopItemComponent>;

const Template: StoryFn<typeof ShopItemComponent> = (args) => (
  <div style={{ display: "flex", gap: 8 }}>
    <ShopItemComponent
      {...args}
      style={{
        width: "350px",
        height: "400px",
      }}
    >
      <div className="">
        <p>TEST CONTENT</p>
        <button>yea</button>
      </div>
    </ShopItemComponent>
    <ShopItemComponent
      {...args}
      style={{
        width: "350px",
        height: "400px",
      }}
    >
      <div className="">
        <p>max width TEST CONTENT</p>
        <button>yea</button>
      </div>
    </ShopItemComponent>
  </div>
);

export const SimonTest = Template.bind({});
SimonTest.args = {
  img: {
    src: "https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/UBPdpBUxcQWrwkPL.png",
    alt: "alt text",
  },
};

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
  title: "Shop",
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
      <div className="cardChildContent">
        <img className="dealImage" src="https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/bnBeetvybGsHffnI.png"></img>
        <p className="dealQuantity">1</p>
        <p className="dealDesc">+0.2 VIP EXP</p>
      </div>
      <div className="cardFooter">
        <img src=""></img>
        <p>Free</p>
      </div>
    </ShopItemComponent>
    <ShopItemComponent
      {...args}
      style={{
        width: "350px",
        height: "400px",
      }}
    >
      <div className="cardChildContent">
        <img className="dealImage" src="https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/NwKKHiPkxpnSgVVz.png"></img>
        <p className="dealQuantity">1</p>
        <p className="dealDesc">+0.2 VIP EXP</p>
      </div>
      <div className="cardFooter">
        <img src=""></img>
        <p>Free</p>
      </div>
    </ShopItemComponent>
  </div>
);

export const deal = Template.bind({});
deal.args = {
  img: {
    src: "https://s3.eu-central-1.amazonaws.com/cos-dev-attachments/ShareX/notsimon/1023/UBPdpBUxcQWrwkPL.png",
    alt: "alt text",
  },
};

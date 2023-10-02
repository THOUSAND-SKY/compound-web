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
    <CardComponent {...args}>
      <div className="">
        <p>TEST CONTENT</p>
        <button>yea</button>
      </div>
    </CardComponent>
    <CardComponent
      {...args}
      style={{
        width: "400px",
      }}
    >
      <div className="">
        <p>max width TEST CONTENT</p>
        <button>yea</button>
      </div>
    </CardComponent>
  </div>
);

export const Round = Template.bind({});
Round.args = {
  img: {
    src: "https://matrix-client.matrix.org/_matrix/media/v3/thumbnail/riot.ovh/PJxWnOsjdnIpkByXMFJVGZgE?width=324&height=324&method=scale",
    alt: "alt text",
  },
};

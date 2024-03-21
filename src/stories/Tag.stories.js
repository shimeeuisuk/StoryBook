import React from "react";

import { Tag } from "../components/Tag";

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    inputwidth: { control: "text" },
    bordercolor: { control: "color" },
    tagbgcolor: { control: "color" },
    tagftcolor: { control: "color" },
    tagiconcolor: { control: "color" },
  },
};

export const TagStory = (args) => <Tag {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: "Tag",
// };

import React from "react";
import Dropdown from "../components/Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    text1: { control: "text" },
    text2: { control: "text" },
    text3: { control: "text" },
    text4: { control: "text" },
    ftsize: { control: "text" },
    bgcolor: { control: "color" },
  },
};

export const StorybookDropdown = (args) => <Dropdown {...args}></Dropdown>;

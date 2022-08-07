import { Component } from "react";
import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,

  argTypes: {
    color: { control: "color" },
    width: { control: "width" },
    height: { control: "height" },
    text: { control: "text" },
  },
};

export const StorybookButton = (args) => <Button {...args}></Button>;

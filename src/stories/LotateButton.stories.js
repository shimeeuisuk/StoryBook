import React from "react";
import LotateButton from "../components/Buttons/LotateButton";

export default {
  title: "Buttons/LotateButton",
  component: LotateButton,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    color: { control: "color" },
    text: { control: "text" },
    handleClick: { action: "handleClick" },
  },
};

// const Template = (args) => <LotateButton {...args} />;
export const StorybookButton = (args) => (
  <LotateButton {...args}></LotateButton>
);

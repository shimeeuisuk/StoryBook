import React from "react";
import Button from "../components/Buttons/Button";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
  parameters: {
    codeExample: `
    /** 경로는 상황에 맞게 사용 **/
    import EmptyState from 'src/startkit_module/pattern/EmptyState/EmptyState';
    import { Sample } from 'src/startkit_module/sample';
    
    <EmptyState
        desc="Lorem ipsum dolor sit amet consectetur."
        title="Lorem ipsum dolor sit amet consectetur."
        showIcon={true}
        Sl_B_Btn={<Sample.Common.PrimaryOutlinedMediumButton />}
    />`,
  },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me222",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
};
export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};
export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
};

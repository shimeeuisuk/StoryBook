import TechStack from "../components/TechStack";

export default {
  title: "TechStack",
  component: TechStack,
  argTypes: {
    text: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export const TechStackStory = (args) => <TechStack {...args} />;

import Calendar from "../components/Calendar";

export default {
  title: "Calendar",
  component: Calendar,
  argTypes: {
    yearcolor: { control: "color" },
    yearsize: { control: "text" },
    monthcolor: { control: "color" },
    monthsize: { control: "text" },
    back: { control: "text" },
    front: { control: "text" },
    dayswidth: { control: "text" },
    daysheight: { control: "text" },
    daysshdowcolor: { control: "color" },
    daysfontsize: { control: "text" },
    daysbackground: { control: "color" },
    daysborderradius: { control: "text" },
    datewidth: { control: "text" },
    datebackground: { control: "color" },
    dateheight: { control: "text" },
    datefontsize: { control: "text" },
  },
};

export const StorybookButton = (args) => <Calendar {...args}></Calendar>;

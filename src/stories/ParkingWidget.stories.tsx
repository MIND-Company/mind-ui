import React from "react";
import { ParkingWidget } from "../components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Driver/ParkingWidget",
  component: ParkingWidget,
} as ComponentMeta<typeof ParkingWidget>;

const Template: ComponentStory<typeof ParkingWidget> = (args: any) => (
  <ParkingWidget {...args} />
);

export const MiniUncompleted = Template.bind({});
MiniUncompleted.args = {
  size: "mini",
  id: "1",
  price: 200,
  onClick: (id: string | number) => {
    console.log(id);
  },
};

export const MiniCompleted = Template.bind({});
MiniCompleted.args = {
  size: "mini",
  id: "2",
  parkingName: "Гринвич",
  date: new Date(),
  price: 300,
  onClick: (id: string | number) => {
    console.log(id);
  },
};

export const Long = Template.bind({});
Long.args = {
  size: "long",
  parkingName: "Гринвич",
  date: new Date(),
  price: 400,
  id: "3",
  onClick: (id: string | number) => {
    console.log(id);
  },
};

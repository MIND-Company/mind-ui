import React from "react";
import { Button } from "../components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Common/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Войти",
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Войти",
  type: "secondary",
};

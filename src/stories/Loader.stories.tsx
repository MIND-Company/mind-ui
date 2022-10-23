import React from "react";
import { Loader } from "../components/Loader/Loader";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Common/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => {
  return <Loader />;
};

export const Default = Template.bind({});

Default.args = {};

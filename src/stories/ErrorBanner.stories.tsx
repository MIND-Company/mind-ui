import React from "react";
import { ErrorBanner } from "../components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Common/Error banner",
  component: ErrorBanner,
} as ComponentMeta<typeof ErrorBanner>;

const Template: ComponentStory<typeof ErrorBanner> = (args: any) => (
  <ErrorBanner {...args} />
);

export const Default = Template.bind({});

Default.args = {};

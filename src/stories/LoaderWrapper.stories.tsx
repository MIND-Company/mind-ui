import React from "react";
import { LoaderWrapper, ParkingWidget } from "../components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Common/Loader Wrapper",
  component: LoaderWrapper,
} as ComponentMeta<typeof LoaderWrapper>;

const Template: ComponentStory<typeof LoaderWrapper> = (args: any) => (
  <LoaderWrapper {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: (
    <ParkingWidget size="mini" price={200} id={"23"} onClick={() => {}} />
  ),
  elementSizes: {
    widthCss: "434px",
    heightCss: "302px",
  },
};

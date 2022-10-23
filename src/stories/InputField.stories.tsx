import React from "react";
import { InputField } from "../components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Common/Input Filed",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args: any) => (
  <InputField {...args} />
);

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Ваш текст",
  validators: [
    (value: string) => {
      if (value.length < 5) {
        return { isValid: false, message: "Длина слова должна быть больше 4" };
      }
      return { isValid: true };
    },
  ],
};

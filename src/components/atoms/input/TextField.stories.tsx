import React from "react";
import { Story, Meta } from "@storybook/react";
import { TextFieldProps } from "@material-ui/core";

import TextField from "./TextField";

export default {
  title: "Text field",
  component: TextField,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

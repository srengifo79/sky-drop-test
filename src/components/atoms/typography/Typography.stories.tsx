import React from "react";
import { Story, Meta } from "@storybook/react";
import { TypographyProps } from "@material-ui/core";

import Typography from "./Typography";

export default {
  title: "Typography",
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default text",
};

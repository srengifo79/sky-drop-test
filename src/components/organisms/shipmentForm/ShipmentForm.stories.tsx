import React from "react";
import { Story, Meta } from "@storybook/react";

import ShipmentForm, { Props as ShipmentProps } from "./ShipmentForm";

export default {
  title: "Shipment Form",
  component: ShipmentForm,
} as Meta;

const Template: Story<ShipmentProps> = () => (
  <ShipmentForm onSubmit={() => {}} />
);

export const Default = Template.bind({});

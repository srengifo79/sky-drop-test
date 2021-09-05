import React from "react";
import { Story, Meta } from "@storybook/react";

import ShipmentForm from "./ShipmentForm";

export default {
  title: "Shipment Form",
  component: ShipmentForm,
} as Meta;

const Template: Story = () => <ShipmentForm onSubmit={() => {}} />;

export const Default = Template.bind({});

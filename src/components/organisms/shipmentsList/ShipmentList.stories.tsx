import React from "react";
import { Story, Meta } from "@storybook/react";

import ShipmentList, { Props as ShipmentListProps } from "./ShipmentList";
import createShipmentResponse from "../../../mocks/createShipmentResponse";
import Wrappers from "../../../mocks/Wrappers";

export default {
  title: "Shipment List",
  component: ShipmentList,
} as Meta;

const Template: Story<ShipmentListProps> = (args) => (
  <Wrappers>
    <ShipmentList {...args} />
  </Wrappers>
);

export const Default = Template.bind({});
Default.args = {
  shipments: createShipmentResponse.included.slice(1),
};

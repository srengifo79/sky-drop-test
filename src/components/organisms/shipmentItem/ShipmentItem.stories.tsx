import React from "react";
import { Story, Meta } from "@storybook/react";
import withMock from "storybook-addon-mock";

import ShipmentItem, { Props as ShipmentProps } from "./ShipmentItem";
import Wrappers from "../../../mocks/Wrappers";
import urlConstans from "../../../constants/urlConstants";
import createLabelResponse from "../../../mocks/createLabelResponse";

export default {
  title: "Shipment Item",
  component: ShipmentItem,
  decorators: [withMock],
} as Meta;

const Template: Story<ShipmentProps> = (args) => (
  <Wrappers>
    <ShipmentItem {...args} />
  </Wrappers>
);

export const Default = Template.bind({});
Default.args = {
  serviceName: "Default text",
  days: 3,
  total: "181.0",
};
Default.parameters = {
  mockData: [
    {
      url: `${process.env.REACT_APP_BASE_URL}${urlConstans.labels}`,
      method: "POST",
      status: 200,
      response: createLabelResponse,
    },
  ],
};

import React from "react";
import { Story, Meta } from "@storybook/react";
import withMock from "storybook-addon-mock";

import Landing from "./Landing";
import urlConstans from "../../constants/urlConstants";
import createShipmentResponse from "../../mocks/createShipmentResponse";
import Wrappers from "../../mocks/Wrappers";

export default {
  title: "Landing",
  component: Landing,
  decorators: [withMock],
} as Meta;

const Template: Story = () => (
  <Wrappers>
    <Landing />
  </Wrappers>
);

export const Default = Template.bind({});
Default.parameters = {
  mockData: [
    {
      url: `${process.env.REACT_APP_BASE_URL}${urlConstans.shipments}`,
      method: "POST",
      status: 200,
      response: createShipmentResponse,
    },
  ],
};

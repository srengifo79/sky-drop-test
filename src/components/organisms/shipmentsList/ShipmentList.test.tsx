import React from "react";
import { render, screen } from "@testing-library/react";

import ShipmentList, { Props as ShipmentListProps } from "./ShipmentList";
import createShipmentResponse from "../../../mocks/createShipmentResponse";
import Wrappers from "../../../mocks/Wrappers";

const props: ShipmentListProps = {
  shipments: createShipmentResponse.included.slice(1),
};

test("Renders props", () => {
  render(<ShipmentList {...props} />, { wrapper: Wrappers });

  props.shipments.forEach((service) => {
    const listItemNames = screen.getAllByText(
      service.attributes.service_level_name!
    );

    listItemNames.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    const listItemDays = screen.getAllByText(service.attributes.days!);

    listItemDays.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    const listItemTotal = screen.getAllByText(
      service.attributes.total_pricing!
    );

    listItemTotal.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});

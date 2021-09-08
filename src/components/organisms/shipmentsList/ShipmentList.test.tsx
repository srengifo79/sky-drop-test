import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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
      service.attributes.service_level_name!,
      { exact: false }
    );

    listItemNames.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    const listItemDays = screen.getAllByText(
      `Tu paquete llegaria en: ${service.attributes.days!}`,
      {
        exact: false,
      }
    );

    listItemDays.forEach((item) => {
      expect(item).toBeInTheDocument();
    });

    const listItemTotal = screen.getAllByText(
      service.attributes.total_pricing!,
      { exact: false }
    );

    listItemTotal.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});

test("Change ranges", () => {
  render(<ShipmentList {...props} />, { wrapper: Wrappers });

  const sliders = screen.getAllByRole("slider");

  fireEvent.mouseDown(sliders[0], { clientX: 162, clientY: 302 });
});

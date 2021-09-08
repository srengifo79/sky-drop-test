import React from "react";
import { render, screen } from "@testing-library/react";

import LabelItem, { Props as LabelItemProps } from "./Labeltem";
import Wrappers from "../../../mocks/Wrappers";

const props: LabelItemProps = {
  id: "123",
  creationDate: "02/07/2021",
  updatedDate: "02/08/2021",
  labelUrl: "/",
  trackingNumber: "456",
};

test("Renders props", () => {
  render(<LabelItem {...props} />, { wrapper: Wrappers });

  const idText = screen.getByText(props.id, { exact: false });
  expect(idText).toBeInTheDocument();

  const creationDateText = screen.getByText(props.creationDate, {
    exact: false,
  });
  expect(creationDateText).toBeInTheDocument();

  const updatedDateText = screen.getByText(props.updatedDate, { exact: false });
  expect(updatedDateText).toBeInTheDocument();

  const pdfLink = screen.getByText("Guia PDF");
  expect(pdfLink).toBeInTheDocument();

  const trackinNumberText = screen.getByText(props.trackingNumber, {
    exact: false,
  });
  expect(trackinNumberText).toBeInTheDocument();
});

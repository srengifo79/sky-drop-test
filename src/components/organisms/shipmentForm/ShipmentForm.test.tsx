import React from "react";
import { render, screen } from "@testing-library/react";

import ShipmentForm, { Props as ShipmentFormProps } from "./ShipmentForm";
import userEvent from "@testing-library/user-event";
import flushPromises from "../../../mocks/flushPromises";

const props: ShipmentFormProps = {
  onSubmit: jest.fn(),
};

test("Submit without inputs", async () => {
  render(<ShipmentForm {...props} />);

  const submitButton = screen.getByText("Crear envío");

  userEvent.click(submitButton);

  await flushPromises();

  expect(props.onSubmit).not.toHaveBeenCalled();
});

test("Submit with inputs", async () => {
  render(<ShipmentForm {...props} />);

  const formInputs = screen.getAllByDisplayValue("");

  const originZip = formInputs[0];

  userEvent.type(originZip, "12345");

  const destinationZip = formInputs[1];
  userEvent.type(destinationZip, "67890");

  const heightInput = formInputs[2];
  userEvent.type(heightInput, "10");

  const lengthInput = formInputs[3];
  userEvent.type(lengthInput, "10");

  const widthInput = formInputs[4];
  userEvent.type(widthInput, "10");

  const submitButton = screen.getByText("Crear envío");
  userEvent.click(submitButton);

  await flushPromises();

  expect(props.onSubmit).toHaveBeenCalled();
});

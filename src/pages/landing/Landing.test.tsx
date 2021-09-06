import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import Wrappers from "../../mocks/Wrappers";
import userEvent from "@testing-library/user-event";
import flushPromises from "../../mocks/flushPromises";
import axiosInstance from "../../services/axios";
import createShipmentResponse from "../../mocks/createShipmentResponse";
import createShipmentBody from "../../mocks/createShipmentBody";
import {
  createLabelErrorResponse,
  createLabelResponse,
} from "../../mocks/createLabelResponse";
import urlConstans from "../../constants/urlConstants";
import createLabelBody from "../../mocks/createLabelBody";

jest.mock("../../services/axios");
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

test("Submit new shipment & select service", async () => {
  render(<Landing />, { wrapper: Wrappers });

  const formInputs = screen.getAllByDisplayValue("");

  const originZip = formInputs[0];

  userEvent.type(originZip, "02900");

  const destinationZip = formInputs[1];
  userEvent.type(destinationZip, "44100");

  const heightInput = formInputs[2];
  userEvent.type(heightInput, "10");

  const lengthInput = formInputs[3];
  userEvent.type(lengthInput, "10");

  const widthInput = formInputs[4];
  userEvent.type(widthInput, "10");

  mockedAxios.post.mockResolvedValueOnce({
    data: { ...createShipmentResponse },
  });

  const submitButton = screen.getByText("Crear envío");
  userEvent.click(submitButton);

  await flushPromises();

  expect(mockedAxios.post).toHaveBeenCalledWith(
    urlConstans.shipments,
    createShipmentBody
  );

  mockedAxios.post.mockResolvedValueOnce({
    data: createLabelResponse,
  });

  const selectButton = screen.getAllByText("Seleccionar Servicio");

  userEvent.click(selectButton[0]);

  await flushPromises();

  expect(mockedAxios.post).toHaveBeenCalledWith(urlConstans.labels, {
    ...createLabelBody,
    rate_id: 492408,
  });

  const modalOpenTitle = screen.getByText("Guia creada con exito.");

  expect(modalOpenTitle).toBeInTheDocument();
});

test("Error on create shipment", async () => {
  render(<Landing />, { wrapper: Wrappers });

  const formInputs = screen.getAllByDisplayValue("");

  const originZip = formInputs[0];

  userEvent.type(originZip, "02900");

  const destinationZip = formInputs[1];
  userEvent.type(destinationZip, "44100");

  const heightInput = formInputs[2];
  userEvent.type(heightInput, "10");

  const lengthInput = formInputs[3];
  userEvent.type(lengthInput, "10");

  const widthInput = formInputs[4];
  userEvent.type(widthInput, "10");

  mockedAxios.post.mockRejectedValueOnce(createLabelErrorResponse);

  const submitButton = screen.getByText("Crear envío");
  userEvent.click(submitButton);

  await flushPromises();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import ShipmentItem, { Props as ShipmentItemProps } from "./ShipmentItem";
import Wrappers from "../../../mocks/Wrappers";
import userEvent from "@testing-library/user-event";
import axiosInstance from "../../../services/axios";
import {
  createLabelErrorResponse,
  createLabelResponse,
  createLabelStatusErrorResponse,
} from "../../../mocks/createLabelResponse";
import flushPromises from "../../../mocks/flushPromises";
import urlConstans from "../../../constants/urlConstants";
import createLabelBody from "../../../mocks/createLabelBody";
import store from "../../../redux/store";

const props: ShipmentItemProps = {
  id: 1234,
  days: 3,
  serviceName: "Fedex",
  total: "12.32",
};

jest.mock("../../../services/axios");
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

const spy = jest.spyOn(store, "dispatch");

test("Renders props", () => {
  render(<ShipmentItem {...props} />, { wrapper: Wrappers });

  const serviceName = screen.getByText(props.serviceName);
  expect(serviceName).toHaveTextContent(props.serviceName);

  const days = screen.getByText(props.days);
  expect(days).toHaveTextContent(String(props.days));

  const totalText = screen.getByText(props.total);
  expect(totalText).toHaveTextContent(props.total);
});

test("Handle item select success", async () => {
  mockedAxios.post.mockResolvedValueOnce({
    data: createLabelResponse,
  });

  render(<ShipmentItem {...props} />, { wrapper: Wrappers });

  const selectButton = screen.getByText("Seleccionar Servicio");

  userEvent.click(selectButton);

  await flushPromises();
  await flushPromises();

  expect(mockedAxios.post).toHaveBeenCalledWith(
    urlConstans.labels,
    createLabelBody
  );
  expect(spy).toHaveBeenCalledWith({
    payload: {
      description: "Para revisar su guia de click en el siguiente enlace: ",
      isOpen: true,
      primaryBtnText: "Aceptar",
      title: "Guia creada con exito.",
      pdfGuideLink:
        "https://shipkraken-demo.s3.amazonaws.com/uploads/label/label_file/a569a2b4-c21e-4100-a643-47176d4606bc.pdf",
    },
    type: "modal/open",
  });
});

test("Handle item select success with status Error", async () => {
  mockedAxios.post.mockResolvedValueOnce({
    data: { ...createLabelStatusErrorResponse },
  });

  render(<ShipmentItem {...props} />, { wrapper: Wrappers });

  const selectButton = screen.getByText("Seleccionar Servicio");

  userEvent.click(selectButton);

  await flushPromises();

  expect(mockedAxios.post).toHaveBeenCalledWith(
    urlConstans.labels,
    createLabelBody
  );
  expect(spy).toHaveBeenCalledWith({
    payload: {
      description: "Guia mal formada",
      isOpen: true,
      primaryBtnText: "Aceptar",
      title: "Oops, ha ocurrido un error",
    },
    type: "modal/open",
  });
});

test("Handle Error response", async () => {
  mockedAxios.post.mockRejectedValueOnce(createLabelErrorResponse);

  render(<ShipmentItem {...props} />, { wrapper: Wrappers });

  const selectButton = screen.getByText("Seleccionar Servicio");

  userEvent.click(selectButton);

  await flushPromises();

  expect(mockedAxios.post).toHaveBeenCalledWith(
    urlConstans.labels,
    createLabelBody
  );
  expect(spy).toHaveBeenCalledWith({
    payload: {
      description: "Unexpected error",
      isOpen: true,
      primaryBtnText: "Aceptar",
      title: "Oops, ha ocurrido un error",
    },
    type: "modal/open",
  });
});

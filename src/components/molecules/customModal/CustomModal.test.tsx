import React from "react";
import { render, screen } from "@testing-library/react";

import CustomModal, { Props as CustomModalProps } from "./CustomModal";
import Wrappers from "../../../mocks/Wrappers";
import userEvent from "@testing-library/user-event";
import store from "../../../redux/store";

const props: CustomModalProps = {
  isOpen: true,
  title: "title",
  description: "description",
  primaryBtnText: "btn text",
};

const dispatchSpy = jest.spyOn(store, "dispatch");

test("Renders without link", () => {
  render(<CustomModal {...props} />, { wrapper: Wrappers });

  const titleText = screen.getByText(props.title);
  const descriptionText = screen.getByText(props.description);
  const pdfGuide = screen.queryByText("Guia PDF");

  expect(titleText).toBeInTheDocument();
  expect(descriptionText).toBeInTheDocument();
  expect(pdfGuide).toBeNull();
});

test("Renders with link", () => {
  const newProps = { ...props, pdfGuideLink: "Link" };
  render(<CustomModal {...newProps} />, {
    wrapper: Wrappers,
  });

  const pdfGuide = screen.getByText("Guia PDF");

  expect(pdfGuide).toBeInTheDocument();
});

test("Close modal", () => {
  render(<CustomModal {...props} />, {
    wrapper: Wrappers,
  });

  const closeButton = screen.getByText(props.primaryBtnText);

  userEvent.click(closeButton);

  expect(dispatchSpy).toHaveBeenCalledWith({
    payload: undefined,
    type: "modal/close",
  });
});

test("Close modal", () => {
  const newProps = { ...props, pdfGuideLink: "Link" };

  render(<CustomModal {...newProps} />, {
    wrapper: Wrappers,
  });

  const pdfLink = screen.getByText("Guia PDF");

  userEvent.click(pdfLink);
});

import { createSlice } from "@reduxjs/toolkit";
import { Props as ModalProps } from "../../components/molecules/customModal/CustomModal";

const initialState: ModalProps = {
  title: "",
  description: "",
  isOpen: false,
  primaryBtnText: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    open: (state, { payload }: { payload: ModalProps }) => {
      state.isOpen = true;
      state.title = payload.title;
      state.description = payload.description;
      state.primaryBtnText = payload.primaryBtnText;
      state.pdfGuideLink = payload.pdfGuideLink;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;

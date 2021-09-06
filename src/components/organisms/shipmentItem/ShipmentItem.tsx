import { FC, useEffect } from "react";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import urlConstans from "../../../constants/urlConstants";
import axiosInstance from "../../../services/axios";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { open } from "../../../redux/slices/modalSlice";
import { Props as ModalProps } from "../../molecules/customModal/CustomModal";

type NewLabelInput = { rate_id: number; label_format: "pdf" };

type NewLabelReponse = {
  data: {
    id: string;
    type: string;
    attributes: {
      created_at: string;
      updated_at: string;
      status: null;
      tracking_number: string;
      tracking_status: null;
      label_url: string;
      tracking_url_provider: string;
      rate_id: number;
      error_message?: Array<{ [key: string]: string }>;
    };
  };
};

export type Props = {
  id: number;
  serviceName: string;
  days: number;
  total: string;
};

const ShipmentItem: FC<Props> = ({ id, serviceName, days, total }) => {
  const dispatch = useAppDispatch();

  const { mutate, data, error } = useMutation<
    AxiosResponse<NewLabelReponse>,
    Error,
    NewLabelInput
  >((newLabel: NewLabelInput) =>
    axiosInstance.post(urlConstans.labels, newLabel)
  );

  const handleShipmentSelect = () => {
    mutate({ rate_id: id, label_format: "pdf" });
  };

  useEffect(() => {
    const modalProperties: ModalProps = {
      title: "",
      primaryBtnText: "Aceptar",
      description: "",
      isOpen: true,
    };
    if (error) {
      let errorMessage = "Ha ocurrido un error inesperado.";
      if (error.message) {
        errorMessage = error.message;
      }
      modalProperties.title = "Oops, ha ocurrido un error";
      modalProperties.description = errorMessage;
    } else if (data) {
      if (data.data.data.attributes.status !== "ERROR") {
        modalProperties.title = "Guia creada con exito.";
        modalProperties.description =
          "Para revisar su guia de click en el siguiente enlace: ";
        modalProperties.pdfGuideLink = data.data.data.attributes.label_url;
      } else {
        modalProperties.title = "Oops, ha ocurrido un error";
        modalProperties.description =
          data.data.data.attributes.error_message![0].message;
      }
    }
    dispatch(open(modalProperties));
  }, [data, error, dispatch]);

  return (
    <div>
      <Typography>{serviceName}</Typography>
      <Typography>{days}</Typography>
      <Typography>{total}</Typography>
      <Button onClick={handleShipmentSelect} variant="contained">
        Select
      </Button>
    </div>
  );
};
export default ShipmentItem;

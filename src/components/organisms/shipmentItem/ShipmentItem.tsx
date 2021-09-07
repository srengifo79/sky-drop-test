import { FC, useEffect } from "react";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import urlConstans from "../../../constants/urlConstants";
import axiosInstance from "../../../services/axios";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { open } from "../../../redux/slices/modalSlice";
import { Props as ModalProps } from "../../molecules/customModal/CustomModal";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerNormal: {
      padding: "5%",
      borderRadius: "8px",
      boxShadow: `0px 0px 3px ${theme.palette.text.hint}`,
      backgroundColor: theme.palette.primary.main,
    },
    text: {
      color: theme.palette.primary.contrastText,
    },
    containerImportant: { backgroundColor: theme.palette.secondary.dark },
  })
);

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
  variant: "important" | "normal";
};

const ShipmentItem: FC<Props> = ({ id, serviceName, days, total, variant }) => {
  const styles = useStyles({
    serviceName,
  });

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
    <div
      className={`${styles.containerNormal} ${
        variant === "important" ? styles.containerImportant : ""
      }`}
    >
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h6" className={styles.text}>
                Nombre: {serviceName}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={styles.text}>
                Tu paquete llegaria en: {days} dias
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={styles.text}>Total: ${total}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button onClick={handleShipmentSelect} variant="contained">
            Seleccionar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default ShipmentItem;

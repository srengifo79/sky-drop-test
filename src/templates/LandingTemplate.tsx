import { Grid } from "@material-ui/core";
import { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import CustomModal, {
  Props as ModalProps,
} from "../components/molecules/customModal/CustomModal";
import ShipmentForm, {
  NewShipmentInput,
} from "../components/organisms/shipmentForm/ShipmentForm";
import ShipmentList, {
  ShipmentRate,
} from "../components/organisms/shipmentsList/ShipmentList";
import createShipmentResponse from "../mocks/createShipmentResponse";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.secondary.main,
      height: "100vh",
    },
  })
);

export type Props = {
  modalProperties: ModalProps;
  handleShipmentSubmit: (data: NewShipmentInput) => void;
  shipments: Array<ShipmentRate>;
};

const LandingTemplate: FC<Props> = ({
  modalProperties,
  handleShipmentSubmit,
  shipments,
}) => {
  const styles = useStyles();

  return (
    <>
      <CustomModal
        isOpen={modalProperties.isOpen}
        title={modalProperties.title}
        description={modalProperties.description}
        primaryBtnText={modalProperties.primaryBtnText}
        pdfGuideLink={modalProperties.pdfGuideLink}
      />
      <div className={styles.container}>
        <Grid container direction="column">
          <Grid item>
            <ShipmentForm onSubmit={handleShipmentSubmit} />
          </Grid>
          <Grid item>
            <ShipmentList shipments={shipments} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default LandingTemplate;

import { Grid } from "@material-ui/core";
import { FC } from "react";

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
  return (
    <>
      <CustomModal
        isOpen={modalProperties.isOpen}
        title={modalProperties.title}
        description={modalProperties.description}
        primaryBtnText={modalProperties.primaryBtnText}
        pdfGuideLink={modalProperties.pdfGuideLink}
      />
      <Grid container spacing={5} direction="column">
        <Grid item>
          <ShipmentForm onSubmit={handleShipmentSubmit} />
        </Grid>
        <Grid item>
          <ShipmentList shipments={createShipmentResponse.included.slice(1)} />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingTemplate;

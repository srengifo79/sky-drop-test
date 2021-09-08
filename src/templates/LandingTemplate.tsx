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
import CustomLoader from "../components/molecules/customLoader/CustomLoader";
import LabelsList, {
  Label,
} from "../components/organisms/labelsList/LabelsList";

export type Props = {
  modalProperties: ModalProps;
  handleShipmentSubmit: (data: NewShipmentInput) => void;
  shipments: Array<ShipmentRate>;
  labels: Array<Label>;
  isLoading: boolean;
  activeView: boolean;
  onSecondaryClick: () => void;
};

const LandingTemplate: FC<Props> = ({
  modalProperties,
  handleShipmentSubmit,
  shipments,
  labels,
  isLoading,
  activeView,
  onSecondaryClick,
}) => {
  return (
    <>
      <CustomLoader isLoading={isLoading} />
      <CustomModal
        isOpen={modalProperties.isOpen}
        title={modalProperties.title}
        description={modalProperties.description}
        primaryBtnText={modalProperties.primaryBtnText}
        pdfGuideLink={modalProperties.pdfGuideLink}
      />
      <Grid container direction="column">
        <Grid item>
          <ShipmentForm
            onSubmit={handleShipmentSubmit}
            onClickSecondary={onSecondaryClick}
          />
        </Grid>
        {activeView ? (
          <Grid item>
            <ShipmentList shipments={shipments} />
          </Grid>
        ) : (
          <Grid item>
            <LabelsList labels={labels} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default LandingTemplate;

import { FC, useEffect } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router";

import urlConstans from "../../../constants/urlConstants";
import axiosInstance from "../../../services/axios";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  const history = useHistory();

  const { mutate, data, error } = useMutation((newLabel: NewLabelInput) =>
    axiosInstance.post<NewLabelReponse>(urlConstans.labels, newLabel)
  );

  const handleShipmentSelect = () => {
    mutate({ rate_id: id, label_format: "pdf" });
  };

  useEffect(() => {
    if (!error && data) {
      if (data.data.data.attributes.status !== "ERROR") {
        history.replace(data.data.data.attributes.label_url);
      } else {
        alert("error");
      }
    }
  }, [data, error, history]);

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

import { FC } from "react";
import { useMutation } from "react-query";
import axiosInstance from "../../services/axios";

import ShipmentForm from "../../components/organisms/shipmentForm/ShipmentForm";
import Shipment from "../../models/shipment";
import urlConstans from "../../constants/urlConstants";

const Landing: FC = () => {
  const { mutate, data, error } = useMutation((newShipment: Shipment) =>
    axiosInstance.post(urlConstans.shipments, newShipment)
  );

  const handleLocationSubmit = (data: Shipment) => {
    mutate(data);
  };

  console.log(data, error);

  return <ShipmentForm onSubmit={handleLocationSubmit} />;
};

export default Landing;

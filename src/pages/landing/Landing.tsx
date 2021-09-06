import { FC } from "react";
import { useMutation } from "react-query";
import axiosInstance from "../../services/axios";

import ShipmentForm, {
  NewShipmentInput,
} from "../../components/organisms/shipmentForm/ShipmentForm";
import urlConstans from "../../constants/urlConstants";
import createShipmentBody from "../../mocks/createShipmentBody";
import ShipmentList from "../../components/organisms/shipmentsList/ShipmentList";
import CustomModal from "../../components/molecules/customModal/CustomModal";
import { useAppSelector } from "../../hooks/reduxHooks";

type NewShipmentBody = {
  address_from: {
    province: string;
    city: string;
    name: string;
    zip: string;
    country: string;
    address1: string;
    company: string;
    address2: string;
    phone: string;
    email: string;
  };
  parcels: Array<{
    weight: number;
    distance_unit: string;
    mass_unit: string;
    height: number;
    width: number;
    length: number;
  }>;
  address_to: {
    province: string;
    city: string;
    name: string;
    zip: string;
    country: string;
    address1: string;
    company: string;
    address2: string;
    phone: string;
    email: string;
    reference: string;
    contents: string;
  };
};

const Landing: FC = () => {
  const modalIsOpen = useAppSelector((state) => state.isOpen);
  const modalPdfLink = useAppSelector((state) => state.pdfGuideLink);

  const { mutate, data } = useMutation((newShipment: NewShipmentBody) =>
    axiosInstance.post(urlConstans.shipments, newShipment)
  );

  const handleShipmentSubmit = (data: NewShipmentInput) => {
    const newShipment = { ...createShipmentBody };

    newShipment.address_from.zip = data.originPC;
    newShipment.address_to.zip = data.destinationPC;

    newShipment.parcels[0].width = parseInt(data.width);
    newShipment.parcels[0].height = parseInt(data.height);
    newShipment.parcels[0].length = parseInt(data.length);

    mutate(newShipment);
  };

  return (
    <>
      <CustomModal
        isOpen={modalIsOpen}
        title="Guia creada"
        description="Descripcion"
        primaryBtnText="Aceptar"
        pdfGuideLink={modalPdfLink}
      />
      <ShipmentForm onSubmit={handleShipmentSubmit} />
      <ShipmentList shipments={data?.data.included.slice(1) || []} />
    </>
  );
};

export default Landing;

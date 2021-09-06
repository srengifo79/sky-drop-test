import { FC, useEffect } from "react";
import { useMutation } from "react-query";
import axiosInstance from "../../services/axios";
import { AxiosResponse } from "axios";

import ShipmentForm, {
  NewShipmentInput,
} from "../../components/organisms/shipmentForm/ShipmentForm";
import urlConstans from "../../constants/urlConstants";
import createShipmentBody from "../../mocks/createShipmentBody";
import ShipmentList from "../../components/organisms/shipmentsList/ShipmentList";
import CustomModal from "../../components/molecules/customModal/CustomModal";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { open } from "../../redux/slices/modalSlice";

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
  const modalProperties = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { mutate, data, error } = useMutation<
    AxiosResponse,
    Error,
    NewShipmentBody
  >((newShipment: NewShipmentBody) =>
    axiosInstance.post(urlConstans.shipments, newShipment)
  );

  const handleShipmentSubmit = (formData: NewShipmentInput) => {
    const newShipment = { ...createShipmentBody };

    newShipment.address_from.zip = formData.originPC;
    newShipment.address_to.zip = formData.destinationPC;

    newShipment.parcels[0].width = parseInt(formData.width);
    newShipment.parcels[0].height = parseInt(formData.height);
    newShipment.parcels[0].length = parseInt(formData.length);

    mutate(newShipment);
  };

  useEffect(() => {
    if (error) {
      let errorMessage = "Ha ocurrido un error inesperado.";
      if (error.message) {
        errorMessage = error.message;
      }
      dispatch(
        open({
          isOpen: true,
          title: "Oops, ha ocurrido un error",
          description: errorMessage,
          primaryBtnText: "Aceptar",
        })
      );
    }
  }, [error, dispatch]);

  return (
    <>
      <CustomModal
        isOpen={modalProperties.isOpen}
        title={modalProperties.title}
        description={modalProperties.description}
        primaryBtnText={modalProperties.primaryBtnText}
        pdfGuideLink={modalProperties.pdfGuideLink}
      />
      <ShipmentForm onSubmit={handleShipmentSubmit} />
      <ShipmentList shipments={data?.data.included.slice(1) || []} />
    </>
  );
};

export default Landing;

import { FC, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { NewShipmentInput } from "../../components/organisms/shipmentForm/ShipmentForm";
import urlConstans from "../../constants/urlConstants";
import createShipmentBody from "../../mocks/createShipmentBody";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { open } from "../../redux/slices/modalSlice";
import LandingTemplate from "../../templates/LandingTemplate";
import axiosInstance from "../../services/axios";
import { finishLoading, startLoading } from "../../redux/slices/loaderSlice";

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
  const [activeView, setActiveView] = useState(true);
  const { modal: modalProperties, loader } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { mutate, data, error, isLoading } = useMutation<
    AxiosResponse,
    Error,
    NewShipmentBody
  >((newShipment: NewShipmentBody) =>
    axiosInstance.post(urlConstans.shipments, newShipment)
  );

  const {
    data: labelsData,
    error: labelsError,
    isLoading: labelsIsloading,
  } = useQuery<AxiosResponse, Error>(
    ["labels", activeView],
    () => axiosInstance.get(urlConstans.labels),
    { enabled: !activeView }
  );

  const handleShipmentSubmit = (formData: NewShipmentInput) => {
    setActiveView(true);
    const newShipment = { ...createShipmentBody };

    newShipment.address_from.zip = formData.originPC;
    newShipment.address_to.zip = formData.destinationPC;

    newShipment.parcels[0].width = parseInt(formData.width);
    newShipment.parcels[0].height = parseInt(formData.height);
    newShipment.parcels[0].length = parseInt(formData.length);

    mutate(newShipment);
  };

  useEffect(() => {
    if (error || labelsError) {
      let errorMessage = "Ha ocurrido un error inesperado.";
      if (error?.message) {
        errorMessage = error.message;
      }
      if (labelsError?.message) {
        errorMessage = labelsError.message;
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
  }, [error, labelsError, dispatch]);

  useEffect(() => {
    let functionToDispatch;
    if (isLoading || labelsIsloading) {
      functionToDispatch = startLoading;
    } else {
      functionToDispatch = finishLoading;
    }
    dispatch(functionToDispatch());
  }, [isLoading, labelsIsloading, dispatch]);

  return (
    <LandingTemplate
      modalProperties={modalProperties}
      handleShipmentSubmit={handleShipmentSubmit}
      shipments={data?.data.included.slice(1) || []}
      labels={labelsData?.data.data || []}
      isLoading={loader.isLoading}
      activeView={activeView}
      onSecondaryClick={() => setActiveView(false)}
    />
  );
};

export default Landing;

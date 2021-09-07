import { FC } from "react";
import { Grid } from "@material-ui/core";

import ShipmentItem from "../shipmentItem/ShipmentItem";

export type ShipmentRate = {
  id: string;
  type: string;
  attributes: {
    created_at?: string;
    updated_at?: string;
    amount_local?: string;
    currency_local?: string;
    provider?: string;
    service_level_name?: string;
    service_level_code?: string;
    service_level_terms?: null;
    days?: number;
    duration_terms?: null;
    zone?: null;
    arrives_by?: null;
    out_of_area?: boolean;
    out_of_area_pricing?: string;
    total_pricing?: string;
    is_ocurre?: boolean;
  };
};

export type Props = {
  shipments: Array<ShipmentRate>;
};

const sortShipments = (shipments: Array<ShipmentRate>) => {
  shipments.sort((a, b) => {
    const totalA = a.attributes.total_pricing!;
    const totalB = b.attributes.total_pricing!;

    const daysA = a.attributes.days!;
    const daysB = b.attributes.days!;

    const fitnessA = parseFloat(totalA) + daysA;
    const fitnessB = parseFloat(totalB) + daysB;

    if (fitnessA > fitnessB) {
      return 1;
    } else if (fitnessA < fitnessB) {
      return -1;
    } else {
      return 0;
    }
  });
  return shipments;
};

const ShipmentList: FC<Props> = ({ shipments }) => {
  return (
    <Grid container spacing={5} justifyContent="center">
      {shipments.length > 0 &&
        sortShipments(shipments).map(({ attributes, id }) => (
          <Grid item>
            <ShipmentItem
              key={id}
              id={parseInt(id)}
              serviceName={attributes.service_level_name || ""}
              days={attributes.days || 0}
              total={attributes.total_pricing || ""}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ShipmentList;

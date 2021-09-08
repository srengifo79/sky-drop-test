import { FC, useEffect, useMemo, useState } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

import ShipmentItem from "../shipmentItem/ShipmentItem";
import CustomSlider from "../../molecules/customSlider/CustomSlider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      overflow: "hidden",
    },
    gridStyle: {
      width: "auto",
      margin: "auto",
    },
  })
);

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

const shipmentsRanges = (shipments: Array<ShipmentRate>) => {
  const ranges = {
    maxPrice: 0,
    minPrice: 0,
    minDays: 0,
    maxDays: 0,
  };

  shipments.forEach(({ attributes }) => {
    const price = parseInt(attributes.total_pricing || "0");
    const days = attributes.days || 0;

    price > ranges.maxPrice && (ranges.maxPrice = price);
    price < ranges.minPrice && (ranges.minPrice = price);

    days > ranges.maxDays && (ranges.maxDays = days);
    days < ranges.minDays && (ranges.minDays = days);
  });

  return ranges;
};

const ShipmentList: FC<Props> = ({ shipments }) => {
  const { maxPrice, minPrice, maxDays, minDays } = useMemo(
    () => shipmentsRanges(shipments),
    [shipments]
  );

  const [priceRange, setPriceRange] = useState([0, 0]);
  const [daysRange, setDaysRange] = useState([0, 0]);

  const styles = useStyles();

  const hanldePriceRangeChange = (start: number, end: number) => {
    setPriceRange([start, end]);
  };

  const hanldeDaysRangeChange = (start: number, end: number) => {
    setDaysRange([start, end]);
  };

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
    setDaysRange([minDays, maxDays]);
  }, [shipments]);

  return (
    <div className={styles.container}>
      <Grid container direction="column" justifyContent="center">
        <Grid item>
          <CustomSlider
            min={minPrice}
            max={maxPrice}
            label="Rango de precios"
            onChange={hanldePriceRangeChange}
          />
        </Grid>
        <Grid item>
          <CustomSlider
            min={minDays}
            max={maxDays}
            label="Rando de dias de entrega"
            onChange={hanldeDaysRangeChange}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            className={styles.gridStyle}
          >
            {shipments.length > 0 &&
              sortShipments(shipments)
                .filter(({ attributes }) => {
                  const price = parseInt(attributes.total_pricing || "0");
                  const days = attributes.days || 0;

                  return (
                    priceRange[0] <= price &&
                    priceRange[1] >= price &&
                    daysRange[0] <= days &&
                    daysRange[1] >= days
                  );
                })
                .map(({ attributes, id }, index) => (
                  <Grid item lg={4} key={id}>
                    <ShipmentItem
                      id={parseInt(id)}
                      serviceName={attributes.service_level_name || ""}
                      days={attributes.days || 0}
                      total={attributes.total_pricing || ""}
                      variant={index === 0 ? "important" : "normal"}
                    />
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShipmentList;

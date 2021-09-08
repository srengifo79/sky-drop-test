import { FC } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

import LabelItem from "../labelItem/Labeltem";

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

export type Label = {
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

export type Props = {
  labels: Array<Label>;
};

const LabelsList: FC<Props> = ({ labels }) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Grid container direction="column" justifyContent="center">
        <Grid item>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            className={styles.gridStyle}
          >
            {labels.length > 0 &&
              labels.map(({ attributes, id }, index) => (
                <Grid item lg={4} key={id}>
                  <LabelItem
                    id={id}
                    creationDate={attributes.created_at}
                    updatedDate={attributes.updated_at}
                    trackingNumber={attributes.tracking_number}
                    labelUrl={attributes.label_url}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LabelsList;

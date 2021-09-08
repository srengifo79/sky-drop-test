import { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "5%",
      borderRadius: "8px",
      boxShadow: `0px 0px 3px ${theme.palette.text.hint}`,
      backgroundColor: theme.palette.primary.main,
    },
    text: {
      color: theme.palette.primary.contrastText,
    },
    containerImportant: { backgroundColor: theme.palette.secondary.dark },
    link: { color: theme.palette.secondary.main },
  })
);

export type Props = {
  id: string;
  creationDate: string;
  updatedDate: string;
  trackingNumber: string;
  labelUrl: string;
};

const LabelItem: FC<Props> = ({
  id,
  creationDate,
  updatedDate,
  trackingNumber,
  labelUrl,
}) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Typography variant="h6" className={styles.text}>
                Id del envio: {id}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={styles.text}>
                Numero de seguimiento: {trackingNumber}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={styles.text}>
                Fecha de creacion: {creationDate}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={styles.text}>
                Fecha de actualizacion: {updatedDate}
              </Typography>
            </Grid>
            <Grid item>
              <Link
                to=""
                className={styles.link}
                onClick={() => {
                  window.location.href = labelUrl;
                }}
              >
                Guia PDF
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default LabelItem;

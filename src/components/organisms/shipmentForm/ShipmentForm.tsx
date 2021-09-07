import { FC } from "react";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.main,
      padding: "4% 6%",
    },
    title: {
      color: theme.palette.primary.contrastText,
    },
    textField: {
      "& .MuiInputBase-root": {
        color: theme.palette.primary.contrastText,
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.white,
      },
      "& .MuiFormLabel-root": {
        color: "white",
      },
    },
    button: {
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

export type NewShipmentInput = {
  originPC: string;
  destinationPC: string;
  height: string;
  length: string;
  width: string;
};

export type Props = {
  onSubmit: (data: NewShipmentInput) => void;
};

const onlyPositiveNumbers = (event: React.ChangeEvent<HTMLInputElement>) =>
  parseInt(event.target.value) < 0 && (event.target.value = "0");

const validateZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  const pattern = /^([0-9]){0,5}$/;

  if (value !== "" && !pattern.test(value)) {
    event.target.value = value.slice(0, value.length - 1);
  }
};

const ShipmentForm: FC<Props> = ({ onSubmit }) => {
  const styles = useStyles();

  const { register, handleSubmit } = useForm<NewShipmentInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Grid container spacing={5} direction="column">
        <Grid item>
          <Typography variant="h4" className={styles.title}>
            Ingrese los datos de el envio.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Grid container spacing={4}>
                <Grid item>
                  <TextField
                    label="Codigo postal de origen"
                    {...register("originPC", { required: true })}
                    onChange={validateZipCode}
                    variant="outlined"
                    className={styles.textField}
                    autoComplete="off"
                    InputProps={{ className: styles.textField }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Codigo postal de destino"
                    {...register("destinationPC", { required: true })}
                    onChange={validateZipCode}
                    variant="outlined"
                    className={styles.textField}
                    autoComplete="off"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={4}>
                <Grid item>
                  <TextField
                    label="Alto (cm)"
                    type="number"
                    {...register("height", { required: true })}
                    onChange={onlyPositiveNumbers}
                    variant="outlined"
                    className={styles.textField}
                    autoComplete="off"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Largo (cm)"
                    type="number"
                    {...register("length", { required: true })}
                    onChange={onlyPositiveNumbers}
                    variant="outlined"
                    className={styles.textField}
                    autoComplete="off"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Ancho (cm)"
                    type="number"
                    {...register("width", { required: true })}
                    onChange={onlyPositiveNumbers}
                    variant="outlined"
                    className={styles.textField}
                    autoComplete="off"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit" className={styles.button}>
            Crear envío
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ShipmentForm;

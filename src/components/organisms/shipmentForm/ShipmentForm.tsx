import { FC } from "react";
import { useForm } from "react-hook-form";

import Button from "../../atoms/button/Button";
import TextField from "../../atoms/input/TextField";
import Typography from "../../atoms/typography/Typography";
import ShipmentInput from "../../../models/ShipmentInput";

type Props = {
  onSubmit: (data: ShipmentInput) => void;
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
  const { register, handleSubmit } = useForm<ShipmentInput>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>Ingrese los datos de el envio para crear envío.</Typography>
      <TextField
        label="Codigo postal de origen"
        {...register("originPC", { required: true })}
        onChange={validateZipCode}
      />
      <TextField
        label="Codigo postal de destino"
        {...register("destinationPC", { required: true })}
        onChange={validateZipCode}
      />
      <TextField
        label="Alto (cm)"
        type="number"
        {...register("height", { required: true })}
        onChange={onlyPositiveNumbers}
      />
      <TextField
        label="Largo (cm)"
        type="number"
        {...register("length", { required: true })}
        onChange={onlyPositiveNumbers}
      />
      <TextField
        label="Ancho (cm)"
        type="number"
        {...register("width", { required: true })}
        onChange={onlyPositiveNumbers}
      />
      <Button variant="contained" type="submit">
        Crear envío
      </Button>
    </form>
  );
};

export default ShipmentForm;
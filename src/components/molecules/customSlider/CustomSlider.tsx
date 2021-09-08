import { FC, useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Slider,
  Theme,
  Typography,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textContainer: {
      textAlign: "center",
      display: "table",
      minHeight: "70px",
    },
    text: {
      color: theme.palette.text.secondary,
    },
    sliderContainer: {
      width: "100%",
      display: "table",
      minHeight: "70px",
    },
  })
);

export type Props = {
  min: number;
  max: number;
  label: string;
  onChange: (initial: number, final: number) => void;
};

const CustomSlider: FC<Props> = ({ min, max, label, onChange }) => {
  const styles = useStyles();

  const [value, setValue] = useState<number[]>([min, max]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    const startValue = (newValue as number[])[0];
    const endValue = (newValue as number[])[1];
    onChange(startValue, endValue);
  };

  useEffect(() => {
    setValue([min, max]);
  }, [min, max]);

  return (
    <div>
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item xs={4}>
          <div className={styles.textContainer}>
            <Typography
              variant="h6"
              className={styles.text}
              style={{
                display: "table-cell",
                verticalAlign: "bottom",
              }}
            >
              {label}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.sliderContainer}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={min}
              max={max}
              style={{
                width: "100%",
                display: "table-cell",
                verticalAlign: "bottom",
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomSlider;

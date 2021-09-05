import { FunctionComponent } from "react";
import { Typography } from "@material-ui/core";

const CustomText: FunctionComponent = ({ children }) => (
  <Typography>{children}</Typography>
);

export default CustomText;

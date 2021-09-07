import { FC } from "react";
import { CircularProgress } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "fixed",
      zIndex: 10,
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      opacity: 0.5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

type Props = {
  isLoading: boolean;
};

const CustomLoader: FC<Props> = ({ isLoading }) => {
  const styles = useStyles();
  return (
    <>
      {isLoading && (
        <div className={styles.container}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default CustomLoader;

import { FC } from "react";
import { Button, Grid, Modal, Typography } from "@material-ui/core";
import { close } from "../../../redux/slices/modalSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.common.white,
      margin: "10% 20% 10% 20%",
      outline: "none",
      borderRadius: "8px",
    },
    text: {
      textAlign: "center",
    },
  })
);

export type Props = {
  isOpen: boolean;
  title: string;
  description: string;
  primaryBtnText: string;
  pdfGuideLink?: string;
  onClose?: () => void;
};

const CustomModal: FC<Props> = ({
  isOpen,
  title,
  description,
  primaryBtnText,
  pdfGuideLink,
  onClose,
}) => {
  const styles = useStyles();

  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(close());
    onClose && onClose();
  };

  return (
    <Modal open={isOpen}>
      <div className={styles.container}>
        <Grid container spacing={10} direction="column">
          <Grid item className={styles.text}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </Grid>
          {!!pdfGuideLink && (
            <Grid item className={styles.text}>
              <Link
                to=""
                onClick={() => {
                  window.location.href = pdfGuideLink;
                }}
              >
                Guia PDF
              </Link>
            </Grid>
          )}
          <Grid item className={styles.text}>
            <Button variant="contained" onClick={handleClick}>
              {primaryBtnText}
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default CustomModal;

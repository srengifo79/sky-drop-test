import { FC } from "react";
import { Button, Modal, Typography } from "@material-ui/core";
import { close } from "../../../redux/slices/modalSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { Link } from "react-router-dom";

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
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(close());
    onClose && onClose();
  };

  return (
    <Modal open={isOpen}>
      <div>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        {!!pdfGuideLink && (
          <Link
            to=""
            onClick={() => {
              window.location.href = pdfGuideLink;
            }}
          >
            Guia PDF
          </Link>
        )}
        <Button variant="contained" onClick={handleClick}>
          {primaryBtnText}
        </Button>
      </div>
    </Modal>
  );
};

export default CustomModal;

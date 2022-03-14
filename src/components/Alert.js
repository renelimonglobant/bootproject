import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const CustomAlert = ({title, code, ...rest}) => {
  return (
    <Alert {...rest}>
      <AlertTitle>{title}</AlertTitle>
      {code}
    </Alert>
  );
};

export default CustomAlert;

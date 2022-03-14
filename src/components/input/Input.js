import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "white",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
    // color: "blue",
  },
});

const Input = ({ name, id, type = "text" }) => {
  return (
    <>
      <ValidationTextField
        label={name}
        required
        variant="outlined"
        defaultValue=""
        id={id}
        type={type}
        sx={{ mt: 2, width: "100%" }}
      />
    </>
  );
};

export default Input;

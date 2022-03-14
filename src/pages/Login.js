import { Link, useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "../components/input/Input";
import Button from "@mui/material/Button";
import { useState } from "react";
import fireBaseApp from "../config/Credentials";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CredentialGrid from "../components/grid/CredentialGrid";
import Alert from "../components/Alert";

const Login = () => {
  const auth = getAuth(fireBaseApp);
  const navigate = useNavigate();
  const location = useLocation();

  // const [login, useLogin] = useState(false);
  const [error, setError] = useState({ status: false, code: "", msj: "" });
  const onSubmit = async (e) => {
    e.preventDefault();
    setError({
      ...error,
      status: false,
    });
    const correo = e.target.user.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("is working uwu....", correo, password, user);
        navigate("/" + location.search);
      })
      .catch((error) => {
        const code = error.code;
        const msj = error.message;
        console.log("not working-ckffkfk erroro....", correo, password);
        setError({
          status: true,
          code,
          msj,
        });
      });
  };
  return (
    <CredentialGrid onSubmit={(e) => onSubmit(e)}>
      <Typography
        gutterBottom
        variant="h5"
        component="h1"
        sx={{ textAlign: "center" }}
      >
        Login
      </Typography>
      <Input name="User" id="user" />
      <Input name="Password" id="password" type="password" />
      <Button
        variant="outlined"
        size="large"
        sx={{ width: "100%", mt: 2, py: 2 }}
        type="submit"
      >
        SEND
      </Button>
      <Box sx={{ color: (theme) => theme.global.mainBlue, mt: 2 }}>
        <Link to="/register">
          {/* <UILink> */}
          Registrate
          {/* </UILink> */}
        </Link>
      </Box>
      {error.status && (
        <Alert
          severity="error"
          title="Error"
          code={[error.code, "—", <strong> ${error.msj}</strong>]}
        />
      )}
    </CredentialGrid>
  );
};

export default Login;

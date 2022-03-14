import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        justifyContent: "right",
        flexDirection: "column",
        // alignItems: "center",
        backgroundImage: (theme) =>
          `linear-gradient(${theme.global.terciaryBlue}, ${theme.global.mainBlue})`,
        // backgroundColor: (theme) => theme.global.terciaryBlue,
      }}
      component="div"
    >
      <Box
        sx={{
          flexBasis: "250px",
          px: 4,
          color: "white",
          textAlign: "right",
        }}
      >
        <Box
          sx={{
            mt: 2,
            "& a": {
              px: 2,
              color: (theme) => theme.global.mainBlue,
            },
          }}
        >
          <Link to="login">Log in</Link>
          <Link to="register">Registro</Link>
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: "100px",
          px: 4,
          color: "white",
          textAlign: "right",
        }}
      >
        <Typography gutterBottom variant="h1" sx={{ textAlign: "right" }}>
          SAVE YOUR IDEAS
        </Typography>
      </Box>
    </Box>
  );
};

export default Welcome;

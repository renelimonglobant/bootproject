import Box from "@mui/material/Box";

const CredentialGrid = ({ children, onSubmit }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: (theme) => `linear-gradient(${theme.global.terciaryBlue}, ${theme.global.mainBlue})`,
        backgroundColor: (theme) => theme.global.terciaryBlue,
      }}
      component="form"
    //   onSubmit={onSubmit}
      onSubmit={(e) => onSubmit(e)}
    >
      <Box
        sx={{
          flexBasis: "250px",
          color: "white",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CredentialGrid;

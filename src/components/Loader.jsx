import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      className="w-full h-[70lvh]"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;

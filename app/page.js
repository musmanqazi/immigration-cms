import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width="100vw"
      height="100vh"
    >
      <Typography variant="h1">Immigration CMS</Typography>
      <Typography variant="h5">The Best Immigration Case Management System. Coming Soon.</Typography>
    </Box>
  );
}

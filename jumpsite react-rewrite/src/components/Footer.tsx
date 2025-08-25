import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1f2937",
        color: "white",
        py: 4,
        mt: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2025 MyBrand. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        <span style={{ color: "yellow" }}>Contact:</span> info@mybrand.com
      </Typography>
    </Box>
  );
}

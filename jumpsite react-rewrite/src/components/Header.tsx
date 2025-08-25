import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1f2937" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "yellow" }}>
          MyBrand
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button sx={{ color: "white" }}>Home</Button>
          <Button sx={{ color: "white" }}>Services</Button>
          <Button sx={{ color: "white" }}>Portfolio</Button>
          <Button sx={{ color: "white" }}>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

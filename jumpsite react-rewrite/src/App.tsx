import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";

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

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1f2937",
        color: "white",
        py: 4,
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © 2025 MyBrand. All rights reserved.
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "black",
        background:
          "linear-gradient(135deg, #000000 0%, #0a0a30 50%, #000000 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />
      {/* Optional: Add subtle animated circles */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(255, 255, 0, 0.05), transparent 50%)," +
            "radial-gradient(circle at 80% 70%, rgba(255, 255, 0, 0.05), transparent 50%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          position: "relative", // make content above background
          zIndex: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 2, color: "white", lineHeight: 1.2 }}
        >
          Discover <span style={{ color: "yellow" }}>Our Services</span> and{" "}
          <span style={{ color: "yellow" }}>Portfolio</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{ mb: 6, color: "white", maxWidth: 700, mx: "auto" }}
        >
          Explore what we do and learn more about{" "}
          <span style={{ color: "yellow" }}>us</span>. Our solutions are
          designed to deliver value and excellence.
        </Typography>

        {/* Widgets */}
        <Grid container spacing={5} justifyContent="center">
          {["Our Services", "Portfolio", "About Us"].map((title) => (
            <Grid key={title} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  bgcolor: "#1f2937",
                  color: "white",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#374151",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {title === "Our Services" && (
                      <>
                        Our <span style={{ color: "yellow" }}>Services</span>
                      </>
                    )}
                    {title === "Portfolio" && (
                      <span style={{ color: "yellow" }}>Portfolio</span>
                    )}
                    {title === "About Us" && (
                      <>
                        About <span style={{ color: "yellow" }}>Us</span>
                      </>
                    )}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {title === "Our Services"
                      ? "Check out the wide range of services we offer to help your business grow."
                      : title === "Portfolio"
                      ? "Explore our past projects and see what we have achieved."
                      : "Learn more about our team and values that drive our work."}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: "#FFD700",
                      color: "black",
                      "&:hover": { bgcolor: "#FFC300" },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;

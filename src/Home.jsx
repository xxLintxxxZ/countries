import React from "react";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  palette: {
      type: 'light',
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#e9ecec',
        paper: '#dcd0d0',
      },
    },
  });

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              WELCOME TO THE COUNTRIES TRIVIA
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Random country flags and capital. don&apos;t simply skip over it
              entirely.
            </Typography>
           
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Coat_of_arms_of_Saint_Pierre_and_Miquelon.svg/400px-Coat_of_arms_of_Saint_Pierre_and_Miquelon.svg.png" width = "200" height = "247"/>
           
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
                Do you know that there is a country named "Saint Pierre and
                Miquelon" in the Americas
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Quote of the day
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          ~ Simplicity is the ultimate sophistication ~
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Home;

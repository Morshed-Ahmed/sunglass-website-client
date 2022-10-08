import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Container, Paper, Stack } from "@mui/material";

const Mans = () => {
  return (
    <Box sx={{ backgroundColor: "#D8E8EB", pt: 10 }}>
      <Container>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              sx={{ backgroundColor: "white", p: 4, borderRadius: 3 }}
            >
              <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                A PAIR FOR HER
              </Typography>
              <img
                src="https://lunettes.com.bd/wp-content/uploads/2021/05/Female-Model-tinified.jpg"
                alt=""
              />

              <Typography sx={{ fontSize: 18 }}>
                Look hot with cool sunglasses
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                No matter your taste, no matter your budget, no matter how often
                you lose your damn sunglasses in the back of a Lyft, we’ve got
                you covered with a wide range of trendy and fashionable shades
              </Typography>

              <Button variant="contained" sx={{ width: "40%" }}>
                SEE ALL
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              sx={{ backgroundColor: "white", p: 4, borderRadius: 3 }}
            >
              <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                A PAIR FOR HIM
              </Typography>
              <img
                src="https://lunettes.com.bd/wp-content/uploads/2021/05/ironman-red-model-photo-2021-a-resized-tinified.png"
                alt=""
              />
              <Typography sx={{ fontSize: 18 }}>
                Put on the right sunglasses and conquer the world
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                Sunglasses might be a small accessory, but they have a large
                impact. A great pair can elevate your outfit and your style, but
                our sunglasses for women can boost your mood too.
              </Typography>

              <Button variant="contained" sx={{ width: "40%" }}>
                SEE ALL
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mans;

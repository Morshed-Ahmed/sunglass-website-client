import React from "react";
import "./Banner.css";
import Grid from "@mui/material/Grid";
import { Button, Container, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Slider
        {...settings}
        style={{
          margin: "10px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  //   background: "red",
                  height: "100%",
                  //   alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                  A BROAD RANGE OF TRENDY EYEWEAR
                </Typography>
                <Typography>
                  Perfect look with a suitable pair of glasses. Put on eyewear &
                  put on positive view mode.
                </Typography>
                <Button
                  variant="contained"
                  // style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  //   background: "red",
                  height: "100%",
                  //   alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                  A BROAD RANGE OF TRENDY EYEWEAR
                </Typography>
                <Typography>
                  Perfect look with a suitable pair of glasses. Put on eyewear &
                  put on positive view mode.
                </Typography>
                <Button
                  variant="contained"
                  // style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  //   background: "red",
                  height: "100%",
                  //   alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                  A BROAD RANGE OF TRENDY EYEWEAR
                </Typography>
                <Typography>
                  Perfect look with a suitable pair of glasses. Put on eyewear &
                  put on positive view mode.
                </Typography>
                <Button
                  variant="contained"
                  // style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  //   background: "red",
                  height: "100%",
                  //   alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                  A BROAD RANGE OF TRENDY EYEWEAR
                </Typography>
                <Typography>
                  Perfect look with a suitable pair of glasses. Put on eyewear &
                  put on positive view mode.
                </Typography>
                <Button
                  variant="contained"
                  // style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  //   background: "red",
                  height: "100%",
                  //   alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                  A BROAD RANGE OF TRENDY EYEWEAR
                </Typography>
                <Typography>
                  Perfect look with a suitable pair of glasses. Put on eyewear &
                  put on positive view mode.
                </Typography>
                <Button
                  variant="contained"
                  // style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  //   background: "red",
                  height: "100%",
                  //   alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                  A BROAD RANGE OF TRENDY EYEWEAR
                </Typography>
                <Typography>
                  Perfect look with a suitable pair of glasses. Put on eyewear &
                  put on positive view mode.
                </Typography>
                <Button
                  variant="contained"
                  // style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} md={6}>
              <Stack
                spacing={3}
                sx={{
                  //   background: "red",
                  height: "100%",
                  //   alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
                  A BROAD RANGE OF TRENDY EYEWEAR
                </Typography>
                <Typography>
                  Perfect look with a suitable pair of glasses. Put on eyewear &
                  put on positive view mode.
                </Typography>
                <Button
                  variant="contained"
                  // style={{ padding: "10px", fontSize: "15px", fontWeight: 700 }}
                >
                  SHOP NOW
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={
                  "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
                }
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </Slider>
    </Container>
  );
};

export default Banner;

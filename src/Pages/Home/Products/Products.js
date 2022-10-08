import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Products = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-thicket-76558.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container
      sx={{ mt: 5, mb: 5, height: { md: "90vh", xs: "70vh" }, width: "90%" }}
    >
      <Typography sx={{ fontSize: { md: 30, xs: 20 } }}>
        FEATURED PRODUCTS
      </Typography>

      <Box sx={{ mt: { md: 7, xs: 5 } }}>
        <Slider {...settings}>
          {products.map((pt) => (
            <Paper elevation={0}>
              <Stack spacing={2} sx={{ mb: 10 }}>
                <img style={{ width: "100%" }} src={pt.image} alt="" />
                <Typography>{pt.name}</Typography>
                <Typography sx={{ fontSize: "17px" }}>{pt.price}</Typography>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/ordernow/${pt._id}`}
                >
                  <Button variant="contained">Add To Card</Button>
                </Link>
              </Stack>
            </Paper>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Products;

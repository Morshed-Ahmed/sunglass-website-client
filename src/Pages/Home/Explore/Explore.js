import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Allproducts from "../Allproducts/Allproducts";
import Footer from "../Footer/Footer";
import Header from "../Shared/Header/Header";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-thicket-76558.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header></Header>
      {/* <Container sx={{ marginTop: 9, marginBlockEnd: 5 }}>
                <Typography gutterBottom variant="h5" component="div">
                    All Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(pd => <Allproducts
                            key={pd._id}
                            pd={pd}
                        >
                        </Allproducts>)
                    }
                </Grid>
            </Container> */}

      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {products.map((pt) => (
            <Grid item xs={1} sm={4} md={4} key={pt._id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea sx={{ height: 400 }}>
                  <Stack spacing={5}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={pt.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography gutterBottom variant="h5" component="div">
                          {pt.name}
                        </Typography>
                        <Typography
                          sx={{
                            letterSpacing: 1.2,
                            fontSize: 15,
                            fontWeight: "bold",
                          }}
                          variant="body2"
                          color="text.secondary"
                        >
                          ৳{pt.price} Total Price
                        </Typography>
                        <Link className="buttons" to={`/ordernow/${pt._id}`}>
                          <Button variant="contained">Add To Card</Button>
                        </Link>
                      </Stack>
                    </CardContent>
                  </Stack>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Explore;

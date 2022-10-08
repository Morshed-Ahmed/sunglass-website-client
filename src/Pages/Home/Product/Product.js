import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { _id, name, description, price, image } = props.product;
  return (
    <>
      <Grid className="product" item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link className="buttons" to={`/ordernow/${_id}`}>
              <Button variant="contained">Add To Card</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Product;

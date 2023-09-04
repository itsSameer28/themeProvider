import React, { useState } from "react";
import productList from "../Data/data.json";
import {
  Typography,
  Card,
  Box,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(() => ({
  card: {
    width: "250px",
    height : "550px",
    margin: "15px",
  },
  cont: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  img:{
    objectFit:"contain"
  }
}));
export default function MediaCard() {
  const navigate = useNavigate()
  const [selectValue, setSelectValue] = useState("All");
  const classes = useStyles();

  const filteredProducts =
    selectValue === "All"
      ? productList
      : productList.filter((product) => {
          return product.category === selectValue;
        });

  return (
    <>
      <p>
        <Typography color="secondary">Search By Category:</Typography>
        <select
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </p>
      <Box className={classes.cont}>
        {filteredProducts.map((product, id) => (
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="300"
              width="300"
              
              image={product.image}
              className={classes.img}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="secondary"
              >
                {product.title.slice(0,40)}
              </Typography>
              <Typography color="secondary" variant="h6">
                Category: {product.category}
              </Typography>
              <Typography  color="secondary" variant="h6">
                Price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={()=> navigate("/shop")}>Buy Now!</Button>
          </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
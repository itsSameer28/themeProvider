import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function CardProduct({ title, price, image, productID }) {
  const navigate = useNavigate();
  return (
    <Box
      className="img-cards"
      onClick={() => {
        localStorage.setItem("productId", productID);
        navigate("/description");
      }}
    >
      <Box>
        <img src={image} alt="" width={150} height={150} />
      </Box>
      <Box>
        <Typography>{title}</Typography>
      </Box>
      <Box>
        <Typography>Price:${price}</Typography>
      </Box>
    </Box>
  );
}

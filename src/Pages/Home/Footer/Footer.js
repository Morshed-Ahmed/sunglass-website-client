import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#677fc6", height: 200 }}>
      <Container
        sx={{
          //   height: "100%",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        {/* <Stack direction={"column"}> */}
        <Stack
          direction={"row"}
          sx={{
            width: { md: "65%", xs: "100%" },
            justifyContent: "space-between",
            mt: 5,
            flexWrap: "wrap",
          }}
        >
          <a
            href=""
            style={{ fontSize: "12px", color: "white", textDecoration: "none" }}
          >
            CONTACT US
          </a>
          <a
            href=""
            style={{ fontSize: "12px", color: "white", textDecoration: "none" }}
          >
            ABOUT US
          </a>
          <a
            href=""
            style={{ fontSize: "12px", color: "white", textDecoration: "none" }}
          >
            TERMS & CONDITIONS
          </a>
          <a
            href=""
            style={{ fontSize: "12px", color: "white", textDecoration: "none" }}
          >
            PRIVACY POLICY
          </a>
          <a
            href=""
            style={{ fontSize: "12px", color: "white", textDecoration: "none" }}
          >
            RETURN & EXCHANGE
          </a>
          <a
            href=""
            style={{ fontSize: "12px", color: "white", textDecoration: "none" }}
          >
            BLOG
          </a>
        </Stack>

        {/* </Stack> */}
      </Container>
      <Stack>
        <Typography sx={{ mt: 5 }} textAlign={"center"} color={"white"}>
          Copyright 2022 © lunettes.com.bd
        </Typography>
      </Stack>
    </div>
  );
};

export default Footer;

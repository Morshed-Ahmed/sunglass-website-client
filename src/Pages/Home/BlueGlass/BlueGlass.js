// import { Button, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';

// const BlueGlass = () => {
//     return (
//         <Container>
//             <Grid sx={{ marginTop: 7 }} container spacing={2}>
//                 <Grid item xs={6}>
//                     <Box>
//                         <img src={''} alt="" />

//                         <CardMedia
//                             component="img"
//                             height=""
//                             image="https://i.ibb.co/P52PBkh/DONOVO-TRANSPARENT-MODEL.jpg"
//                             alt="green iguana"
//                         />
//                     </Box>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <CardContent sx={{ marginTop: 18 }}>
//                         <Typography gutterBottom variant="h5" component="div">
//                             BLUE LIGHT BLOCKING GLASSES
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             Give your eyes a break with anti-blue light glasses. Reading glasses with blue light protection is useful for people who want to preserve their vision. Due to the intense strain of working at the computer, your eyes get tired very quickly, our anti-blue glasses help protect your eyes from the harmful effects of the blue light.
//                         </Typography>
//                         <Button variant="contained">VIEW COLLECTION </Button>
//                     </CardContent>
//                 </Grid>

//             </Grid>
//         </Container>
//     );
// };

// export default BlueGlass;

import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BlueGlass = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#D8E8EB",
        mt: { md: 15, xs: 20 },
        height: "100vh",
      }}
    >
      <Container sx={{ background: "white", borderRadius: 5, height: "100%" }}>
        <Grid container spacing={2} sx={{ mt: 10 }}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/P52PBkh/DONOVO-TRANSPARENT-MODEL.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "left",
                height: "100%",
              }}
            >
              <Typography sx={{ fontSize: "20px" }}>
                BLUE LIGHT BLOCKING GLASSES
              </Typography>
              <Typography sx={{ fontSize: "16px", color: "#000000" }}>
                Give your eyes a break with anti-blue light glasses. Reading
                glasses with blue light protection is useful for people who want
                to preserve their vision. Due to the intense strain of working
                at the computer, your eyes get tired very quickly, our anti-blue
                glasses help protect your eyes from the harmful effects of the
                blue light.
              </Typography>

              <Button variant="contained" sx={{ width: "50%" }}>
                VIEW COLLECTION{" "}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlueGlass;

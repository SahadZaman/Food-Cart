import React from 'react'
import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import linkeIcon from "../../assets/assets/like.png"
import heartIcon from "../../assets/assets/heart.png"
import shareIcon from "../../assets/assets/share.png"

const CustomCard = ({img,price,item,likes,heart,share}) => {
  const DishBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadious: "10px",
    borderTopRightRadious: "10px",
    maxWidth: 350,
    backgrondColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 2, 0, 2),
    },
    "&:hover" :{
      backgrondColor:"#f5f5f5",
      boxShadow:"0 0 5px rgba(0,0,0,0.5)",
      transform:"scale(1.05)",
      transition:"all 0.3s ease-in-out",

    },
 }));
  const ImageContainer = styled(Box)(() => ({
    width: "100%",

  }));
  const InfoBox = styled(Box)(() => ({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",

  }));

  return (
    <DishBox>
      <ImageContainer>
        <img src={img} alt="house photos" style={{ maxWidth: "100%" }} />
      </ImageContainer>
      <Box sx={{padding:"1rem" }}>
        <Typography variant='body2' sx={{ fontWeight:"700" }}>
          ${price}
        </Typography>
        <Typography variant='body2' sx={{ fontWeight:"700" }}>
          {item}
        </Typography>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <InfoBox>
            <img src={linkeIcon} alt="bedroomicons" />
            <Typography variant='body2' sx={{ mt:1 }}>
              {likes}
            </Typography>
          </InfoBox>
          <InfoBox>
            <img src={heartIcon} alt="heartIcons" />
            <Typography variant='body2' sx={{ mt:1 }}>
              {heart}
            </Typography>
          </InfoBox>
          <InfoBox>
            <img src={shareIcon} alt="shareIcone" />
            <Typography variant='body2' sx={{ mt:1 }}>
              {share}
            </Typography>
          </InfoBox>
        </Box>

      </Box>
    </DishBox>
  )
}

export default CustomCard
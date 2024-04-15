import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import { styled } from '@mui/system'
import houserCard from "../../assets/assets/ambience.jpg"

const Ambience = () => {

  const CustumBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "coloum",
      textAlign: "center"
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "coloum",
      alignItems: "center"
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: '#000339',
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  const TextflexBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));
  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: '#000',
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: '32px',
    },
  }));
  const SmollText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: '#7B8087',
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: '14px',
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustumBox>
          <ImgContainer>
            <img src={houserCard} alt="house" style={{ maxWidth: "100%" }} />
          </ImgContainer>
          <Box>
            <Divider />
            <Typography sx={{
              fontSize: '35px',
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}>
              You've Found a ambience to love
            </Typography>
            <Typography sx={{
              fontSize: '16px',
              color: "#5A6473",
              lineHeight: "27px",
            }}>
              Discover the epitom of culinary excellence at savoria, Where every visit is an enchanting endezvous with the art of dining.
            </Typography>
          </Box>
        </CustumBox>
        <TextflexBox>
          <Box sx={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
          }}>
            <LargeText>250+</LargeText>
            <SmollText>Dishes</SmollText>

          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
          }}>
            <LargeText>300+</LargeText>
            <SmollText>Trusted Clients</SmollText>

          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
          }}>
            <LargeText>350+</LargeText>
            <SmollText>Delivery per Day</SmollText>

          </Box>

        </TextflexBox>
      </Container>

    </Box>
  )
}

export default Ambience
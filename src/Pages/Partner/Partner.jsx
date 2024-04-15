import React from 'react'
import { Box, Typography, Container } from '@mui/material';
import logoImg from "../../assets/assets/buy_icon.png";
import starsImg from "../../assets/assets/Star.png";
import logosImg from "../../assets/assets/logos.png";
import { styled } from '@mui/system';


const Partner = () => {
    const Customcuntainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "colum",
            alignItems: "center",
            textAlign: "center",
            marginBottom: theme.spacing(4),
        },
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(4),
        },

    }));

    return (
        <Box sx={{ mt: 10 }}>
            <Customcuntainer>
                <CustomBox>
                    <img src={logoImg} alt="logoImage" style={{ maxWidth: "100%" }} />
                    <Typography variant='body2' sx={{
                        color: "#7D8589",
                        fontSize: "16px",
                        fontWeight: "bold",
                        mt: 2,
                    }}>
                        More than 50,000 trust Bypass-brs
                    </Typography>

                </CustomBox>
                <Box>
                    <img src={starsImg} alt="starImg" style={{ maxWidth: "100%" }} />
                    <Typography variant='body2' sx={{
                        color: "#7D8589",
                        fontSize: "16px",
                        fontWeight: "bold",
                        mt: 2,
                    }}>
                        5-Star Rating (2k+ Reviews)

                    </Typography>
                </Box>

            </Customcuntainer>

            <Container sx={{display:"flex",flexDirection:"column"}}>
                <img src={logosImg} alt="logosImg" />

            </Container>

        </Box>
    )
}

export default Partner
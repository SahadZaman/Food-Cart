import React from 'react'
import { styled } from '@mui/system';
import { Box, Typography, Container } from '@mui/material';
import { Title } from '@mui/icons-material';
import CustomButton from '../../Components/Custombutton/CustomButton';
import welcom from "../../assets/assets/welcome.png"

const Welcome = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#fff",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));
    return (
        <Box sx={{ backgroundColor: "#FED801", minHeight: "80vh", display: "flex" }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant='body2'
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 10,
                                mb: 4,
                            }}
                        >
                            Welcome to Bypass-brs Restorant
                        </Typography>
                        <Title variant="h1" >
                            Discover a place were you'll love to Eat
                        </Title>

                        <Typography
                            variant='body2'
                            sx={{
                                fontSize: "18px",
                                color: "#5A6473",
                                my: 4,
                            }}
                        >
                            Immerce your self in the elegant ambience as you each bit, accombanied by your extensive selection of hand-pick wine and
                            crefully curated cocktails.
                        </Typography>
                        <CustomButton
                            backgroundColor="#0F1B4C"
                            color="#fff"
                            buttonText="More About Us"
                            welcomeBtn={true} />
                    </Box>

                    <Box sx={{ flex: "1.25" }}>
                        <img src={welcom}
                            alt="welcome"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />

                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default Welcome
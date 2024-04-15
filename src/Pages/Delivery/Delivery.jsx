import React from 'react'
import { Typography, Box, Container } from '@mui/material'
import { styled } from '@mui/system'
import DeliveryImg from "../../assets/assets/DeliveryImg.png"
import CustomButton from '../../Components/Custombutton/CustomButton'
const Delivery = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        backgroundColor: "#FED801",
        height: "416px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            padding: theme.spacing(3, 3, 0, 3),
            width: "90%",
        },
    }));
    const CustumBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(10, 0, 10, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
            padding: '0',
        },
    }));
    return (
        <CustumBox>
            <CustomContainer>
                <Box>
                    <Typography sx={{ fontSize: "35px", color: "white", fontWeight: "700", fontFamily: "monospace" }}>
                        Super Fast Home deivery
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#000", fontWeight: "800", my: 3, fontFamily: "monospace" }}>
                        Door to Door delivery
                    </Typography>
                    <CustomButton
                        backgroundColor="#fff"
                        color="#17275F"
                        buttonText="Order Now!!" />
                </Box>
                <img src={DeliveryImg} alt="Deliveryimg" style={{ maxWidth: "100%" }} />
            </CustomContainer>

        </CustumBox>
    )
}

export default Delivery
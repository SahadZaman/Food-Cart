import { styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../Custombutton/CustomButton'
import logoImg from "../../assets/assets/buy_icon.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//they are the icons to import form mui()
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import { Margin } from '@mui/icons-material'
import Welcome from '../../Pages/Welcom/Welcome'

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState({ left: false })
//navigate router set aki..
    const Navigate = useNavigate()

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
            return;

        }
        setMobileMenu({ ...mobileMenu, [anchor]: open })
    }
    const list = (anchor) => (
        <Box sx={{
            width:anchor === "top" || anchor === "bottom" ? "auto" : 250
            }}
            role="presentation"
            onClick = {toggleDrawer(anchor,false)}
            onkeyDown = {toggleDrawer(anchor,false)}
            >
            <List>
                {
                    nav_titles.map((item,index) => (

                        <ListItem key={item.index} disablePadding onClick={()=>Navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                            {
                                index === 0 && <HomeIcon/>
                            }
                            {
                                index === 1 && <FeaturedPlayListIcon/>
                            }
                            {
                                index === 2 && <MiscellaneousServicesIcon/>
                            }
                            {
                                index === 3 && <ContactsIcon/>
                            }
                            </ListItemIcon>
                            <ListItemText primary={item.Display} />
                        </ListItemButton>
                    </ListItem>

                    ))
                }
                    
            </List>
        </Box>
    )



    const nav_titles = [
        {
            Display: "Home",
            path: "/"
        },
        {
            Display: "Dishes",
            path: "/Dishes"
        },
        {
            Display: "Services",
            path: "/services"
        },
        {
            Display: "About Us",
            path: "/about"
        },

    ]


    const NavBarLinkBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },


    }));
    const NavBarLink = styled(Typography)(() => ({
        fontSize: "15px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        '&:hover': {
            color: "#fff"
        }
    }));
    const NavBarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },


    }));
    //Ith menu icon style cheyyan an
    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none", //normal nonn
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block", //mobile device block 
        },


    }));

    return (


        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "40px",
                maxWidth: "auto",
                backgroundColor: "#FED801",
                marginLeft: "0px",
                marginBottom: "-24px",

            }}

        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}

            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer
                        anchor='left'
                        open={mobileMenu["left"]}
                        onClose={toggleDrawer("left", false)}>
                            
                        {list("left")}


                    </Drawer>

                    <NavBarLogo src={logoImg} alt="image" />

                </Box>
                <NavBarLinkBox>
                    {
                        nav_titles.map((item, index) => (
                            <NavBarLink variant='body2' onClick={()=>Navigate(item.path)}>
                                {item.Display}
                            </NavBarLink>

                        ))
                    }

                </NavBarLinkBox>

            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}


            >
                <NavBarLink variant='body2'>
                    Sign Up
                </NavBarLink>
                <CustomButton
                    backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="register"
                />


            </Box>

        </Box>

    )
}

export default Header
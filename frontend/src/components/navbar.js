import { AppBar, Toolbar, IconButton, Typography, useTheme } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useContext } from "react";
import { ColorModeContext } from "../App";
import { Brightness4, Brightness7 } from "@mui/icons-material";


const Navbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <>
            <AppBar position="fixed" sx={{ maxHeight: '20vh', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        National Parks Tracker
                    </Typography>
                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    )
}

export default Navbar;
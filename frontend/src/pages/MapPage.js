import { Box, Grid, Card } from "@mui/material";
import Navbar from "../components/navbar"
import Map from "../components/menuPage/map";
import SideBar from "../components/menuPage/sidebar";

const MapPage = () => {
    return (
        <Box >
            <Navbar />
            <Box style={{ maxHeight: 'calc(100vh - 64px)' }}>
                <Grid container >
                    <Grid item xs={9}>
                        <Card style={{ height: '100%', maxHeight: 'calc(100vh - 64px)' }}>
                            <Map />
                        </Card>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <SideBar />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default MapPage;
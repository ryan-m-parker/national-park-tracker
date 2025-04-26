import { List, CardContent, ListItem, Button, Typography, CardActions, IconButton, CardHeader, Checkbox } from "@mui/material";
import { useContext } from "react";
import { ParksContext } from "../../../contexts/ParksProvider";
import { ArrowBackIos, OpenInNew, ParkOutlined, ParkSharp } from "@mui/icons-material";
import ImageCarousel from "./ParkInfoPanel/ImageCarousel";
import { markParkNotVisited, markParkVisited } from "../../../serivces/visitedParkService";

const ParkInfoPanel = () => {
    const { selectedPark, setSelectedPark, visitedParks, setVisitedParks } = useContext(ParksContext);
    const { parkCode, fullName, designation, url } = selectedPark;
    return (
        <>
            <CardHeader
                avatar={
                    <IconButton onClick={() => setSelectedPark(null)}>
                        <ArrowBackIos />
                    </IconButton>
                }
                title={fullName}
                subheader={designation}
                action={
                    <Checkbox
                        key={parkCode}
                        checked={visitedParks.find((visitedPark) => visitedPark.parkCode === parkCode)}
                        checkedIcon={<ParkSharp />}
                        icon={<ParkOutlined />}
                        onChange={async (event) => {
                            const visitedPark = visitedParks.find((visitedPark) => visitedPark.parkCode === parkCode);
                            const checked = event.target.checked;
                            let newVisitedParks = visitedParks;
                            if (!checked && visitedPark) {
                                newVisitedParks = visitedParks.filter((visitedPark) => visitedPark.parkCode !== parkCode);
                                markParkNotVisited(visitedPark);
                            } else if (checked && !visitedPark) {
                                newVisitedParks = [...visitedParks, await markParkVisited(parkCode)];
                            }
                            setVisitedParks(newVisitedParks);
                        }}
                    />
                }
            />
            <List style={{ maxHeight: '100%', overflow: 'auto', marginTop: -20 }}>
                <ListItem >
                    <ImageCarousel key={parkCode} selectedPark={selectedPark} />
                </ListItem>

                <ListItem divider dense>
                    <CardContent>
                        <Typography>
                            {selectedPark.description}
                        </Typography>
                    </CardContent>
                </ListItem>

            </List>
            <CardActions>
                <Button component="a" href={url} target="_blank">
                    View on NPS website
                    <OpenInNew />
                </Button>
            </CardActions>
        </>
    );
}

export default ParkInfoPanel;
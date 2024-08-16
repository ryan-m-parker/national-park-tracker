import { ArrowForwardIos } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useContext } from "react";
import { ParksContext } from "../../../contexts/ParksProvider";

const NationalParkListItem = ({park}) => {
    const { setSelectedPark } = useContext(ParksContext);
    const { name } = park;

    return (
        <ListItem key={name} id={park.parkCode} divider disablePadding>
            <ListItemButton onClick={() => setSelectedPark(park)}>
                <ListItemText primary={name} />
                <ListItemSecondaryAction>
                    <ArrowForwardIos/>
                </ListItemSecondaryAction>
            </ListItemButton>
        </ListItem>
    );
}

export default NationalParkListItem;
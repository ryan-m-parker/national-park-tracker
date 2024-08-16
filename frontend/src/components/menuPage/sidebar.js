import { Card, List } from "@mui/material";
import { useContext } from "react";
import { ParksContext } from "../../contexts/ParksProvider";
import NationalParkListItem from "./sidebar/NationalParkListItem";
import ParkInfoPanel from "./sidebar/ParkInfoPanel";

const SideBar = () => {
    const { parks, selectedPark } = useContext(ParksContext);

    return (
        <Card raised style={{ height: '100%', maxHeight: 'calc(100vh - 64px)' }}>
            {selectedPark !== null
                ? <ParkInfoPanel />
                : (
                    <List style={{ maxHeight: '100%', overflow: 'auto' }}>
                        {parks.map((park) => (
                            <NationalParkListItem key={park.parkCode} park={park} />
                        ))
                        }
                    </List>
                )}

        </Card>
    );
}

export default SideBar;
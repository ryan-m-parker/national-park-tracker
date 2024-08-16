import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { ParksContext } from "../../contexts/ParksProvider";
import { useContext } from "react";
import { Container } from "@mui/material";
import FlagTwoTone from "./map/FlagTwoTone";
import TreeTwoTone from "./map/TreeTwoTone";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const Map = () => {
    const { parks, visitedParks, selectedPark, setSelectedPark } = useContext(ParksContext);
    let continentalUSParks = parks.filter(({ states }) => states !== "VI");
    if (selectedPark) {
        continentalUSParks = continentalUSParks.filter(({ parkCode }) => parkCode !== selectedPark.parkCode);
        continentalUSParks.push(selectedPark);
    }
    return (
        <Container>
            <ComposableMap
                projection="geoAlbersUsa"
                projectionConfig={{ scale: 1000 }}
            >
                <Geographies geography={geoUrl}>
                    {({ outline, borders }) => (
                        <>
                            <Geography
                                geography={outline}
                                fill="#D9A87E"
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none" },
                                    pressed: { outline: "none" },
                                }} />
                            <Geography
                                geography={borders}
                                fill="none"
                                stroke="#FFF"
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none" },
                                    pressed: { outline: "none" },
                                }} />
                        </>
                    )}
                </Geographies>
                {continentalUSParks.map((park) => (
                    <Marker key={park.name} coordinates={[Number(park.longitude), Number(park.latitude)]} id={park.name} onClick={() => setSelectedPark(park)} style={{ fontSize: '2rem' }}>
                        {visitedParks.find((visitedPark) => visitedPark.parkCode === park.parkCode) ? park.parkCode === selectedPark?.parkCode ? (
                            <FlagTwoTone primaryColor="#496a81" borderColor="#334B5B" borderWidth={2.5} />
                        ) : (
                            <FlagTwoTone primaryColor="#496a81" />
                        ) : park.parkCode === selectedPark?.parkCode ? (
                            <TreeTwoTone primaryColor="#4A7729" borderColor="#3F6142" borderWidth={2.5} />
                        ) : (
                            <TreeTwoTone primaryColor="#4A7729" />
                        )}
                    </Marker>
                ))}
            </ComposableMap>
        </Container>
    );
}

export default Map;
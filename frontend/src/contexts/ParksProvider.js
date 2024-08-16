import { createContext, useContext, useState, useMemo, useEffect } from "react";

export const ParksContext = createContext(null);

export const useParksContext = () => useContext(ParksContext);

const ParksProvider = ({ children }) => {
    const [parks, setParks] = useState([]);
    const [visitedParks, setVisitedParks] = useState([]);
    const [selectedPark, setSelectedPark] = useState(null);

    const loadParks = async () => {
        fetch(`https://developer.nps.gov/api/v1/parks?limit=600&api_key=${process.env.REACT_APP_NATIONAL_PARK_API_KEY}`)
            .then(response => response.json())
            .then(results => {
                console.log(results);
                const filteredParks = results.data?.filter(park => park.designation.includes("National Park") || park.designation.includes("National and"));
                setParks(filteredParks);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const loadVisitedParks = async () => {
        fetch(`/visits`)
            .then(response => response.json())
            .then(results => {
                console.log(results);
                setVisitedParks(results);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        loadParks();
        loadVisitedParks();
    }, []);

    const value = useMemo(() => ({
        parks,
        selectedPark,
        setSelectedPark,
        visitedParks,
        setVisitedParks
    }), [
        parks,
        selectedPark,
        setSelectedPark,
        visitedParks,
        setVisitedParks
    ])

    return <ParksContext.Provider value={value}>{children}</ParksContext.Provider>
}

export default ParksProvider;
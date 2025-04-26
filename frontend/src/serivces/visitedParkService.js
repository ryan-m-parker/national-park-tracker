export const markParkVisited = async (parkCode) => {
    return fetch(`/visits`, {
        method: "POST",
        body: JSON.stringify({
            parkCode
        }),
        headers: {
            "Content-Type": "application/json",
          }
    }).then(async data => {
        return await data.json();
    }).catch(error => {
            console.log(error);
        })
}

export const markParkNotVisited = async (visitedPark) => {
    fetch(`/visits/${visitedPark.id}`, {
        method: "DELETE"
    }).catch(error => {
            console.log(error);
        })
}
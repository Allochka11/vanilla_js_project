export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovermentBuildings>) => {
    return buildings.map(s => s.address.street.title);
}


export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(s => s.address.street.title)
}

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}
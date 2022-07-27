export function demolishHousesOnTheStreet(newCity: CityType, happyStreet: string) {

    newCity.houses = newCity.houses.filter(h => h.address.street.title !== happyStreet)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovermentBuildings>, number: number) => {
    return buildings.filter(b => b.staffCount > number)

}
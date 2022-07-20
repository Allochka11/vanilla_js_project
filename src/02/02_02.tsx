type StreetType = {
    title: string
}

type AddressType = {
    number?: number
    street: StreetType

}

type HousesType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovermentBuildings>
    citizensNumber: number
}

type GovermentBuildings = {
    id: number
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
type TechType = {
    id: number
    title: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType = {
    title: string
    country: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: "Alla",
    age: 30,
    isActive: true,
    address: {
        streetTitle: "Shevchenko 51",
        city: {
            title: "Hlukhiv",
            country: "Ukraine"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        }
    ]
}

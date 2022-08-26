export type UserType = {
    name: string
    hair: number
    address: {title:string, house?:number}
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType &{
    laptop: LaptopType
}
export type UserWithBooksType = UserType &{
    books:Array<string>
}

export function makeHairStyle(user:UserType, power:number) {
    const copy = {...user, hair: user.hair / power}
    return copy
}
export function moveUser(user2: UserWithLaptopType, city: string) {
    return {
        ...user2,
        address: {...user2.address, title: city}
    }
}

export function upgrateUserLaptop(user2: UserWithLaptopType, title: string) {
    return {
        ...user2,
        laptop: {
            ...user2.laptop,
            title:title
        }
    }
}

export function moveUserToOtherHouse(user2: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...user2,
        address: {
            ...user2.address,
            house: house
        }
    }
}
export function addBook(user2: UserWithLaptopType & UserWithBooksType, book: string) {
    let copy = {
        ...user2,
        books: [
            ...user2.books, book

        ]
    }

    return copy
}

export function updateBook(user2: UserWithLaptopType & UserWithBooksType, toChange:string, newBook: string) {
    let copy = {
        ...user2,
        books: user2.books.map(b=> b === toChange ? newBook : b)
    }



    return copy
}





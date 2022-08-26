import {
    addBook,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, updateBook,
    upgrateUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10"

test.skip('reference type test', ()=>{
    let user: UserType = {
        name: 'Alla',
        hair: 30,
        address: {
            title: 'Kyiv'
        }
    }
    const awesomeUser = makeHairStyle(user,2)
    expect(user.hair).toBe(30)
    expect(awesomeUser.hair).toBe(15)
});

test.skip('change address', ()=> {
    let user2: UserWithLaptopType = {
        name: 'Alla',
        hair: 30,
        address: {
            title: 'Kyiv'
        },
        laptop: {
            title:'Asus'
        }
    }
    const movedUser = moveUser(user2, 'Hlukhiv');

    expect(user2).not.toBe(movedUser)
    expect(user2.address).not.toBe(movedUser.address)
    expect(user2.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Hlukhiv')
});

test.skip('upgrate laptop', ()=> {
    let user2: UserWithLaptopType = {
        name: 'Alla',
        hair: 30,
        address: {
            title: 'Kyiv'
        },
        laptop: {
            title:'Asus'
        }
    }
    const upgratedLaptop = upgrateUserLaptop(user2, 'Macbook');

    expect(user2).not.toBe(upgratedLaptop)
    expect(user2.address).toBe(upgratedLaptop.address)
    expect(user2.laptop).not.toBe(upgratedLaptop.laptop)
    expect(upgratedLaptop.laptop.title).toBe('Macbook')
    expect(user2.laptop.title).toBe('Asus')
});

test.skip('upgrate laptop books', ()=> {
    let user2: UserWithLaptopType & UserWithBooksType = {
        name: 'Alla',
        hair: 30,
        address: {
            title: 'Kyiv',
            house: 11
        },
        laptop: {
            title:'Asus'
        },
        books:['css', 'html', 'js' , 'react']
    }
    const upgratedLaptop = moveUserToOtherHouse(user2, 12);

    expect(user2).not.toBe(upgratedLaptop)
    expect(user2.books).toBe(upgratedLaptop.books)
    expect(user2.address).not.toBe(upgratedLaptop.address)
    expect(user2.laptop).toBe(upgratedLaptop.laptop)
    expect(upgratedLaptop.address.house).toBe(12)

});

test.skip('add book', ()=> {
    let user2: UserWithLaptopType & UserWithBooksType = {
        name: 'Alla',
        hair: 30,
        address: {
            title: 'Kyiv',
            house: 11
        },
        laptop: {
            title:'Asus'
        },
        books:['css', 'html', 'js' , 'react']
    }
    const upgratedBooks = addBook(user2, 'Starik I More');

    expect(user2).not.toBe(upgratedBooks)
    expect(user2.books).not.toBe(upgratedBooks.books)
    expect(user2.address).toBe(upgratedBooks.address)
    expect(user2.laptop).toBe(upgratedBooks.laptop)
    expect(upgratedBooks.books[4]).toBe('Starik I More')
    // expect(upgratedBooks.books[5]).toBe('ts')

});

test('update book', ()=> {
    let user2: UserWithLaptopType & UserWithBooksType = {
        name: 'Alla',
        hair: 30,
        address: {
            title: 'Kyiv',
            house: 11
        },
        laptop: {
            title:'Asus'
        },
        books:['css', 'html', 'js' , 'react']
    }
    const upgratedBooks = updateBook(user2, 'js', 'Starik I More');

    expect(user2).not.toBe(upgratedBooks)
    expect(user2.books).not.toBe(upgratedBooks.books)
    expect(user2.address).toBe(upgratedBooks.address)
    expect(user2.laptop).toBe(upgratedBooks.laptop)
    expect(upgratedBooks.books[2]).toBe('Starik I More')
    // expect(upgratedBooks.books[5]).toBe('ts')

});
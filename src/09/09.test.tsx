import {users} from "../07/07";

function increaseAge (u: UserType) {
    u.age++
}
test.skip('reference type test', ()=>{
    let user = {
        name:'Alla',
        age:30
    }

    increaseAge(user);

    expect(user.age).toBe(31);
    const superMan = user;
    superMan.age = 1000;
    expect(user.age).toBe(1000)
    expect(superMan.age).toBe(1000)
});

test.skip('array reference type test', ()=> {
    let users = [
        {
        name:'Alla',
        age:30},
        {
            name:'Alla',
            age:30
        }];

    let admins = users;
    admins.push({name: 'Tolia', age: 93})

    expect(users[2]).toEqual({name: 'Tolia', age: 93})
});
test('value reference type test', ()=> {
    let usersCount = 100;

    let adminsCount = usersCount;
    adminsCount = adminsCount + 1

    expect(usersCount).toEqual(100)
    expect(adminsCount).toEqual(101)
})
export type UsersType = {
    [key:string]: {id:number, name:string}
}

let users:UsersType;

beforeEach(()=> {
    users = {
        '0': {id:101, name:'Dimych'},
        '1':{id:323232, name:'Natasha'},
        '2':{id:505, name:'Valera'},
        '3':{id:1, name:'Katia'}
    }
});
test(('should update corresponding user'),()=> {
    users[0].name = 'Dmitriy';

    expect(users[0].name).toBe('Dmitriy');
})

test(('should delete corresponding user'),()=> {


    delete users['1'];


    expect(users[1]).toBeUndefined() ;
})
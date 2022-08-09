
export const userArray = ['Dimych', 'Natasha', 'Valera', 'Katia'];
export const userObj = {
    '0':'Dimych',
    '1':'Natasha',
    '2':'Valera',
    '3':'Katia'
}
export type UsersType = {
    [key:string]: {id:number, name:string}
}

export const users:UsersType = {
    '0': {id:101, name:'Dimych'},
    '1':{id:323232, name:'Natasha'},
    '2':{id:505, name:'Valera'},
    '3':{id:1, name:'Katia'}
}

let userNew= {name:'Pola', id:100500};
users[userNew.id ]= userNew;
console.log(users)
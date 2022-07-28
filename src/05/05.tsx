export type PeopleType = {
    name: string
    age: number
}

const people: Array<PeopleType> = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Alexandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const dev = people.map(men => ({
    skills: ['css, html, js, React'],
    firstName: men.name.split(' ')[0],
    lastName: men.name.split(' ')[1]
}));

const messages = people.map(men => `Hello ${men.name.split(' ')[0]}! Welcome to IT-Incubator`);

export const createGreetingMessage = (people: Array<PeopleType>) => {
    return people.map(men => `Hello ${men.name.split(' ')[0]}! Welcome to IT-Incubator`);
}


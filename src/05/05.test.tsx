import {createGreetingMessage, PeopleType} from './05';


let people: Array<PeopleType> = [];

beforeEach(() => {
    people = [
        {name: 'Andrey Ivanov', age: 33},
        {name: 'Alexandr Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]

});
test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrey! Welcome to IT-Incubator')

})


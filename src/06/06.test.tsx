import {ManComponentType} from "./Destructuring";

let props: ManComponentType;

beforeEach(() => {
    props = {
        name: 'Alla',
        age: 30,
        lessons: [{title: '1'}, {title: '2'}]
    }
})

test.skip(" ", () => {

    const {age, lessons} = props;

    expect(age).toBe(30);
    expect(lessons.length).toBe(2);


});

test("", () => {

    // const [l1, ...rest] = props.lessons
    expect(props.lessons).toStrictEqual([{title: '1'}, {title: '2'}]);

    // expect(l1.title).toBe('1');
    // expect(rest.length).toBe(1);


});
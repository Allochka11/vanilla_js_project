import {StudentType} from "../02/02";
import {addTech, doesStudentLiveInCity} from "./03";
import {makeActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Alla",
        age: 30,
        isActive: false,
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
})

test.skip("new tech should be added to technologies", () => {
    expect(student.technologies.length).toBe(3);
    addTech(student, 'React');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('React');
    expect(student.technologies[3].id).toBeDefined();

});

test.skip("student should be actives", () => {
    expect(student.isActive).toBe(false);
    makeActive(student);
    expect(student.isActive).toBe(true);
})
test("student lives in city?", () => {
    expect(student.address.city.title).toBeDefined()
    let res1 = doesStudentLiveInCity(student, 'Hlukhiv');
    let res2 = doesStudentLiveInCity(student, 'Moskow');

    expect(res1).toBe(true);
    expect(res2).toBe(false);


})


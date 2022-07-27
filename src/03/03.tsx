import {StudentType} from "../02/02";

export const addTech = (student: StudentType, tech: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: tech
    });
};

export const makeActive = (st: StudentType) => {
    st.isActive = true;
}
export const doesStudentLiveInCity = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName;
}
export const addMoneyToBudget = (building: GovermentBuildings, budget: number) => {
    building.budget += budget;
}
export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true;
}

export const toFireStaff = (govermentBuilding: GovermentBuildings, stuff: number) => {
    govermentBuilding.staffCount -= stuff;
}

export const toHireStaff = (govermentBuilding: GovermentBuildings, stuff: number) => {
    govermentBuilding.staffCount += stuff;
}
export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens! I want you to be happy! All ${city.citizensNumber} of you!`;

}

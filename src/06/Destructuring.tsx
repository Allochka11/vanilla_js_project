import React from "react";

type LessonsType = {
    title: string
}

export type ManComponentType = {
    name: string
    age: number
    lessons: LessonsType[]
}

type PropsType = {
    title: string
    man: ManComponentType
}

let user = {
    name: 'Alla',
    age: 30,
    address: {
        country: 'Ukraine',
        city: 'Kuiv',
    }
}




export const ManComponent: React.FC<PropsType> = (props) => {
    const {title} = props;
    const {name} = props.man;
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>

        </div>
    );
};
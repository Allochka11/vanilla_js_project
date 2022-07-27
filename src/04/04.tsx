const ages = [11, 18, 16, 90, 101];

const predicate = (age: number) => {
    return age > 90
}
const old = [100]

type CourcesType = {
    title: string
    price: number
}

const cources = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
];

const predicateCources = (cource: CourcesType) => {
    return cource.price < 160;
}

const cheapCources = [
    {title: 'CSS', price: 100},
    {title: 'React', price: 150}
]
import { character, GENDER, movie } from "./types";


export let movies: movie[] = [
    {
        id: 1,
        title: "X-men: O filme",
        year: 2000
    }
]


export let characters:character[] =[
    {
        id: 1,
        name: "Storm",
        gender:GENDER.FEMALE,
        description: "Melhor dos melhores"
    },
    {
        id: 2,
        name: "Homem aranha",
        gender:GENDER.FEMALE,
        description: "Melhor dos melhores"
    },
    {
        id: 3,
        name: "Mulher aranha",
        gender:GENDER.FEMALE,
        description: "Melhor dos melhores"
    },
    {
        id: 4,
        name: "Aranha Homem Mulher",
        gender:GENDER.FEMALE,
        description: "Melhor dos melhores"
    }
]
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)
const projects = [
    {
        id: nanoid(),
        url: "projectsImg/img1.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img2.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img3.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img4.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img5.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img6.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img7.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img8.jpg"
    },
    {
        id: nanoid(),
        url: "projectsImg/img9.jpg"
    }
]
export default projects;
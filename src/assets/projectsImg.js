import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)
const projects = [
    {
        id: nanoid(),
        url: "projectsImg/ochiDesign.gif",
        githubLink: "https://akshay-9155.github.io/ochi-design-clone/"
    },
    {
        id: nanoid(),
        url: "projectsImg/notesApp.gif",
        githubLink: "https://akshay-9155.github.io/project-todo-list/"
    },
    {
        id: nanoid(),
        url: "projectsImg/chessClock.gif",
        githubLink: "https://akshay-9155.github.io/chess-clock/"
    },
    {
        id: nanoid(),
        url: "projectsImg/calculator.gif",
        githubLink: "https://akshay-9155.github.io/project-calculator/"
    },
    {
        id: nanoid(),
        url: "projectsImg/memeGenerator.gif",
        githubLink: "https://akshay-9155.github.io/Meme-Generator/"
    }
]
export default projects;
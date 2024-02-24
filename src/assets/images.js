import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)
const images = [
    {
        id: nanoid(),
        url: "logos/React.webp"
    },
    {
        id: nanoid(),
        url: "logos/Javascript.webp"
    },
    {
        id: nanoid(),
        url: "logos/Java.webp"
    },
    {
        id: nanoid(),
        url: "logos/NodeJs.webp"
    },
    {
        id: nanoid(),
        url: "logos/MySQL.webp"
    },
    {
        id: nanoid(),
        url: "logos/Mongodb.webp"
    },
    {
        id: nanoid(),
        url: "logos/Github.webp"
    },
    {
        id: nanoid(),
        url: "logos/GSAP.webp"
    },
    {
        id: nanoid(),
        url: "logos/HTML.webp"
    },
    {
        id: nanoid(),
        url: "logos/CSS.webp"
    }
]
export default images;
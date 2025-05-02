import { BiLogoRedux } from 'react-icons/bi'
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiAstro, SiFramer, SiVite, SiJira, SiPostman } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";

export const work = [
    {
        id: 1,
        projectname: "PhotoSnap Website",
        companyname: "Dazzle Inc.",
        img: '../public/photosnap-website.png',
        github: "https://github.com/sheet848/photosnap-website",
        preview: "https://photosnap-website-two.vercel.app/",
    },
    {
        id: 2,
        projectname: "Developers Job Portal",
        companyname: "Dazzle Inc.",
        img: '../public/dev-jobs-portal.png',
        github: "https://github.com/sheet848/dev-jobs-portal",
        preview: "https://dev-jobs-portal.vercel.app/",
    },
    {
        id: 3,
        projectname: "Article Summarizer",
        companyname: "Dazzle Inc.",
        img: '../public/summarizer.png',
        github: "https://github.com/sheet848/article-summarizer",
        preview: "https://ai-summarizer-three-bay.vercel.app/",
    },
    {
        id: 4,
        projectname: "Todo App",
        companyname: "Dazzle Inc.",
        img: '../public/todo-app.png',
        github: "https://github.com/sheet848/todo-app",
        preview: "https://todo-app-sn.vercel.app/",
    },
];

export const techicons = [
    {
        id: 1,
        name: "HTML",
        icon: <FaHtml5 />, 
    },
    {
        id: 2,
        name: "CSS3",
        icon: <FaCss3Alt />,
    },
    {
        id: 3,
        name: "JavaScript",
        icon: <IoLogoJavascript />,
    },
    {
        id: 4,
        name: "React",
        icon: <FaReact />,
    },
    {
        id: 5,
        name: "Redux",
        icon: <BiLogoRedux />,
    },
    {
        id: 6,
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
    },
    {
        id: 7,
        name: "Vite",
        icon: <SiVite />,
    },
    {
        id: 8,
        name: "Astro",
        icon: <SiAstro />,
    },
    {
        id: 9,
        name: "GitHub",
        icon: <FaGithub />,
    },
    {
        id: 10,
        name: "Figma",
        icon: <FaFigma />,
    },
    {
        id: 11,
        name: "Framer",
        icon: <SiFramer />,
    },
    {
        id: 12,
        name: "JIRA",
        icon: <SiJira />,
    },
    {
        id: 13,
        name: "Zustand",
        icon: <img src="./Zustand.svg" alt="zustand-text-logo" />,
    },
    {
        id: 14,
        name: "Postman",
        icon : <SiPostman />,
    },
];

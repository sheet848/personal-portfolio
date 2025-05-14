import { BiLogoRedux } from 'react-icons/bi'
import { FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiAstro, SiFramer, SiVite, SiJira, SiPostman } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";

export const work = [
    {
        id: 1,
        projectname: "PhotoSnap Website",
        companyname: "React HTML SCSS JavaScript",
        img: './photosnap-website.png',
        github: "https://github.com/sheet848/photosnap-website",
        preview: "https://photosnap-website-two.vercel.app/",
    },
    {
        id: 2,
        projectname: "Developers Job Portal",
        companyname: "React HTML CSS JavaScript",
        img: './dev-jobs-portal.png',
        github: "https://github.com/sheet848/dev-jobs-portal",
        preview: "https://dev-jobs-portal.vercel.app/",
    },
    {
        id: 3,
        projectname: "Article Summarizer",
        companyname: "React Redux Tailwind CSS JavaScript",
        img: './summarizer.png',
        github: "https://github.com/sheet848/article-summarizer",
        preview: "https://ai-summarizer-three-bay.vercel.app/",
    },
    {
        id: 4,
        projectname: "Video Annotation App",
        companyname: "React Tailwind CSS JavaScript",
        img: './video-annotation.png',
        github: "https://github.com/sheet848/video-annotation",
        preview: "https://video-annotation-chi.vercel.app/",
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
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
    },
    {
        id: 6,
        name: "Vite",
        icon: <SiVite />,
    },
    {
        id: 7,
        name: "Redux",
        icon: <BiLogoRedux />,
    },
    {
        id: 8,
        name: "Zustand",
        icon: <img src="./Zustand.svg" alt="zustand-text-logo" />,
    },
];

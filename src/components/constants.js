import snakegame from "./snakegame.jpeg"
import project2 from "./project-2.jpg";
import portfolio from './portfolio.png'

export const HERO_CONTENT = `I am a passionate  developer and Coder with a knack for crafting robust and scalable web applications. 
I have honed my skills in front-end technologies like Reactjs,Html,tailwindcss,and as well as in Programming languages like c++,javascript.
 My goal was to Become a Proficient Software developer engineer so that I will support my family .`;

export const ABOUT_TEXT = `I am a dedicated and versatile  Programmer with a passion for creating efficient and user-friendly web applications.I am good at some Technologies like Reactjs, tailwindCSS,Html,CSS and good command on programming language like C++,javascript My journey in development and programming began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.Outside of coding, I enjoy staying active, exploring new technologies.`;

export const PROJECTS = [
  {
    title: "NewsGyaan_WebApplication",
    image: project2,
    description:
      "A fully functional News-web-Application for displaying news Content of different Category with API integration",
    technologies: ["Html", "Bootstrap", "React", "Node.js"],
    location:["https://github.com/ShidoAKV/NewsGyaan_App"],
  },
  {
    title: "Snake Game",
    image: snakegame,
    description:
      "DSA based Game which Uses fundamental concepts of DSA and oops and small graphics",
    technologies: ["C++","Graphics"],
    location:["https://github.com/ShidoAKV/SnakeGame_DSA-oops"],
  },
  {
    title: "Portfolio-Website",
    image: portfolio,
    description:
      "You are currently on it",
    technologies: ["HTML", "CSS", "Reactjs","TailwindCSS"],
    location:["https://github.com/ShidoAKV/Portfolio"],
  },
];

export const CONTACT = {
  address: "Mundka NewDelhi, India",
  phoneNo: "+91 8826753957 ",
  email: "abhi3vish@gmail.com",
};
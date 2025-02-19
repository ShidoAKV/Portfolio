import snakegame from "./snakegame.jpeg";
import project2 from "./project-2.jpg";
import portfolio from './portfolio.png';
import votingApp from './VotingApp_img.jpg';
import NexaHealth from './NexaHealth.jpg'


export const HERO_CONTENT = `I am a passionate  developer and Coder with a knack for crafting robust and scalable web applications. 
I have honed my skills in front-end technologies like Reactjs,Html,tailwindcss,and as well as in Programming languages like c++,javascript.
 My goal was to Become a Proficient Software developer engineer so that I will support my family .`;

export const ABOUT_TEXT = `I am a dedicated and versatile  Programmer with a passion for creating efficient and user-friendly web applications.I am good at some Technologies like Reactjs, tailwindCSS,Html,CSS and good command on programming language like C++,javascript My journey in development and programming began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.Outside of coding, I enjoy staying active, exploring new technologies.`;

export const PROJECTS = [
  {
    title: "NexaHealth",
    image:NexaHealth,
    description:
      "This project is a full-stack web application built using the MERN stack, featuring real-time communication with WebRTC & WebSockets, secure JWT-based authentication, optimized media handling via Cloudinary, and seamless payment gateway integration for a smooth user experience. 🚀",
    technologies: ["React.js", "Node.js","MongoDB", "express.js","WebRtc","Websockets","JWT","cloudinary","Payment Gateway"],
    location:["https://github.com/ShidoAKV/NexaHealth"],
  },
  {
    title: "VotingApp",
    image: votingApp,
    description:
      "This project is a Voting App built using the MERN stack. It features secure JWT-based authentication, intuitive CRUD operations for voting, real-time updates, and user-friendly notifications and confirmations powered by React-Toastify and Email.js .",
    technologies: ["MongoDB", "express.js","React-Toastify", "React.js", "Node.js","Email.js"],
    location:["https://github.com/ShidoAKV/VotingApp"],
  },
  {
    title: "NewsGyaan_WebApplication",
    image: project2,
    description:
      "A fully functional News-web-Application for displaying news Content of different Category with API integration",
    technologies: ["Html", "Bootstrap", "React.js", "Node.js"],
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
    technologies: ["React.js","TailwindCSS","Email.js","ReactToastify"],
    location:["https://github.com/ShidoAKV/Portfolio"],
  },
];

export const CONTACT = {
  address: "Mundka NewDelhi, India",
  phoneNo: "+91 8826753957 ",
  email: "abhi3vish@gmail.com",
};
import snakegame from "./snakegame.jpeg";
import project2 from "./project-2.jpg";
import portfolio from './portfolio.png';
import votingApp from './VotingApp_img.jpg';
import NexaHealth from './NexaHealth.jpg'


export const HERO_CONTENT = `I am a passionate developer and coder with a strong background in building dynamic and scalable web applications. I enjoy creating efficient, user-friendly solutions and continuously seek opportunities to grow both personally and professionally. My long-term goal is to become a skilled software engineer and use my work to support and uplift my family`;

export const ABOUT_TEXT = `I am a dedicated and versatile Programmer with a passion for creating efficient and user-friendly web applications. Expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and solid experience in building dynamic,scalable web applications.I also have strong proficiency in Next.js for creating optimized React-based applications, and React Native for developing cross-platform Android apps.

Driven by a goal to become a proficient software engineer,I am committed to continuously improving my skills and using my work to support and uplift my family.`;

export const PROJECTS = [
  {
    title: "NexaHealth",
    image:NexaHealth,
    description:
      "This project is a full-stack web application built using the MERN stack, featuring real-time communication with WebRTC & WebSockets, secure JWT-based authentication, optimized media handling via Cloudinary, and seamless payment gateway integration for a smooth user experience. 🚀",
    technologies: ["React.js", "Node.js","MongoDB", "express.js","socket.io","peer.js","JWT","cloudinary","Payment Gateway","Gemini API","nodemailer","Html-pdf","lottie-files","React-packages"],
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
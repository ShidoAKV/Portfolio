import portfolio from './portfolio.png';
import votingApp from './VotingApp_img.jpg';
import NexaHealth from './NexaHealth.jpg'
import PilleyImage from './PilleyImage.jpg'
import ChatApp from './ChatApp.png';

export const HERO_CONTENT = `I am a passionate developer and coder with a strong background in building dynamic and scalable web applications. I enjoy creating efficient, user-friendly solutions and continuously seek opportunities to grow both personally and professionally. My long-term goal is to become a skilled software engineer and use my work to support and uplift my family`;

export const ABOUT_TEXT = `I am a dedicated and versatile Programmer with a passion for creating efficient and user-friendly web applications. Expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and solid experience in building dynamic,scalable web applications.I also have strong proficiency in Next.js for creating optimized React-based applications, and React Native for developing cross-platform Android apps.

Driven by a goal to become a proficient software engineer.`;

export const PROJECTS = [
  {
    title: "NexaHealth",
    image: NexaHealth,
    description:
      "NexaHealth is a modern full-stack healthcare management system built with the MERN stack. It features real-time communication using WebSockets (Socket.io) and WebRTC (Peer.js), secure authentication via JWT,optimize media (image & PDF & text) uploads using Multer and Cloudinary . The platform supports seamless payment integration, dynamic appointment booking, AI-powered symptom checking via the Gemini API, prescription generation with HTML-PDF, and email communication through Nodemailer. It also includes rate limiting with express-rate-limit, ensuring performance, reliability, and a smooth user experience.",
    technologies: ["React.js", "Node.js", "MongoDB", "express.js", "socket.io", "peer.js", "JWT","node-cache","cloudinary","Multer", "Payment Gateway", "Gemini API", "nodemailer", "Html-pdf", "lottie-files","express-rate-limit","React-packages"],
    location: ["https://github.com/ShidoAKV/NexaHealth"],
    link: ["https://nexahealth.onrender.com"]
  },
  {
    title: "Pilley Clothing Website",
    image: PilleyImage,
    description:
      "Pilley is a modern clothing eCommerce platform built using Next.js and a PostgreSQL backend via Neon DB. It features secure user authentication with Clerk, seamless payments through Razorpay, and a robust product image system powered by Cloudinary. The platform includes a dynamic shopping cart, refund handling via Razorpay payment links, and real-time feedback with React-Toastify, ensuring a responsive and intuitive user experience.",
    technologies: [
      "Next.js",
      "Clerk-Authentication",
      "Razorpay Payment Gateway/ Links",
      "Neon DB (PostgreSQL)",
      "Cloudinary",
      "React-hot-toast",
      "Tailwind CSS",
      "PrismaORM"
    ],
    location: ["https://github.com/ShidoAKV/Pilley"],
    link: ["https://www.pilley.in/"]
  },
  {
    title: "Chatting App",
    image: ChatApp,
    description:
     "A full-featured real-time Android Chat App built with React Native, using JWT for secure authentication, Socket.io for instant messaging, and Cloudinary for seamless image uploads. Built on a robust Node.js + Express.js backend with MongoDB. The app uses AsyncStorage for session persistence, Context API for global state management, and integrates native modules. It also include complete CRUD operations for users, messages, and friend management.",
    technologies: [
      "React Native",
      "Socket.io",
      "JWT",
      "AsyncStorage",
      "Context API",
      "Cloudinary",
      "Multer",
      "Node.js", "MongoDB", "express.js"
    ],
    location: ["https://github.com/ShidoAKV/ChatApp"],
  },
  {
    title: "VotingApp",
    image: votingApp,
    description:
      "This project is a Voting App built using the MERN stack. It features secure JWT-based authentication, intuitive CRUD operations for voting, real-time updates, and user-friendly notifications and confirmations powered by React-Toastify and Email.js .",
    technologies: ["MongoDB", "express.js", "React-Toastify", "React.js", "Node.js", "Email.js"],
    location: ["https://github.com/ShidoAKV/VotingApp"],
    link: ["https://votingapp-mrzk.onrender.com/"]
  },
  {
    title: "Portfolio-Website",
    image: portfolio,
    description:
      "A modern, responsive portfolio website built with React.js and TailwindCSS, showcasing projects with smooth animations, integrated email functionality via Email.js, and real-time feedback using React-Toastify for an interactive user experience.",
    technologies: ["Express.js","Node.js","React.js", "TailwindCSS","Lottie", "Email.js","Framer-motion","Gemini API"],
    location: ["https://github.com/ShidoAKV/Portfolio"],
    link: ["https://shidoakv.github.io/Portfolio/"]
  },
];

export const CONTACT = {
  address: "Mundka NewDelhi, India",
  phoneNo: "+91 8826753957 ",
  email: "abhi3vish@gmail.com",
};
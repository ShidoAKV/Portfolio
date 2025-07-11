import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { SiEducative } from "react-icons/si";
import { toast, ToastContainer } from 'react-toastify';

function Navbar() {
  const [dataBase, setdataBase] = useState([]);
  const [educativeViews, setEducativeViews] = useState(0);
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 || 0x8);
      return v.toString(16);
    });
  };
  

  useEffect(() => {
    // Load the view count from localStorage when the component mounts
    const savedViews = parseInt(localStorage.getItem('educativeViews'), 10) || 0;
    setEducativeViews(savedViews);
     
     // Sirf Testing ke liye mushe allowed hai
    let uniqueID = localStorage.getItem('uniqueID');
    
    if (!uniqueID) {
      uniqueID = generateUUID();
      setdataBase((prevDataBase) => [...prevDataBase, uniqueID]);
      localStorage.setItem('uniqueID', uniqueID);
    }
  }, []);

  const handleEducativeClick = () => {
    if (educativeViews < 3) {
      window.open(
        "https://drive.google.com/file/d/1Jy7dfoJ05mwiRYxSnC79nkxKYK134wJX/view?usp=drive_link",
        '_blank'
      );
      const newViews = educativeViews + 1;
      setEducativeViews(newViews);
      localStorage.setItem('educativeViews', newViews);
      setTimeout(() => toast.info(`Your Attempts : ${newViews} (Max Attempts:3)`), 0);
    } else {
      const uniqueId = generateUUID();
      if (!dataBase.includes(uniqueId)) {
        setdataBase((prevDataBase) => [...prevDataBase, uniqueId]);
        setTimeout(() => toast.error(`You have exceeded the maximum number of views for this link.`));
      } else {
        toast.info('This unique ID already exists.');
      }
    }
  };

  return (
    <>
    <ToastContainer/>
    <nav className='  mb-20 flex items-center justify-between py-6'>
        <div className=' flex flex-shrink-0 items-center '>
          <img src={logo} alt="logo" className='mx-4 lg:mx-10 w-10  bg-gray-200 rounded-2xl ' 
          />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
         <SiEducative
            className="bg-blue-500 rounded-sm h-6 w-6"
            style={{ cursor: "pointer" }}
            onClick={() => {
              const uniqueID = localStorage.getItem("uniqueID");
              if (uniqueID ==="ec584647-5f5b-453a-1138-9de4ca03ac33"|| uniqueID==="8d8217ea-332b-4cac-27f1-7b2459d4a6a5"||uniqueID==="bb8029b9-b265-4b40-318b-816f002153c4"||uniqueID==="447441dc-2355-4bec-13e9-71ad27f1e367") {
                window.open(
                  "https://drive.google.com/file/d/1Jy7dfoJ05mwiRYxSnC79nkxKYK134wJX/view?usp=drive_link",
                  "_blank"
                );
              } else {
                if (typeof handleEducativeClick === "function") {
                  handleEducativeClick(); 
                } 
              }
            }}
          />
         <FaLinkedin  style={{cursor:"pointer" ,backgroundColor:"#274da9"}} onClick={() => window.open("https://www.linkedin.com/in/abhishek-vishwakarma-96a847263/")}/>
         <FaInstagramSquare  style={{cursor:"pointer",backgroundColor:"#a92487"}} onClick={() => window.open("https://www.instagram.com/abhishekvishwakarma23520/") } />
        <FaSquareGithub  style={{cursor:"pointer"}} onClick={() => window.open("https://github.com/ShidoAKV")}/>
        </div>
    </nav>
    </>
  )
}

export default Navbar

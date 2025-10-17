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
  



   const [scrolled, setScrolled] = useState(false);
   const [desktop, setdesktop] = useState(false);

useEffect(() => {
  const checkDevice = () => {
    if (window.innerWidth >= 1024) {
      setdesktop(true);
    } else {
      setdesktop(false); 
    }
  };

  checkDevice(); 

  window.addEventListener("resize", checkDevice);

  return () => window.removeEventListener("resize", checkDevice);
}, []);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEducativeClick = () => {
     toast.info(`You have exceeded the maximum number of views for this link.`)
    // if (educativeViews < 3) {
    //   window.open(
    //     "https://drive.google.com/file/d/1ljZ6hsIEJ3vFWIFV5V4HlSKsZyMrDi3S/view?usp=drive_link",
    //     '_blank'
    //   );
    //   const newViews = educativeViews + 1;
    //   setEducativeViews(newViews);
    //   localStorage.setItem('educativeViews', newViews);
    //   setTimeout(() => toast.info(`Your Attempts : ${newViews} (Max Attempts:3)`), 0);
    // } else {
    //   const uniqueId = generateUUID();
    //   if (!dataBase.includes(uniqueId)) {
    //     setdataBase((prevDataBase) => [...prevDataBase, uniqueId]);
    //     setTimeout(() => toast.error(`You have exceeded the maximum number of views for this link.`));
    //   } else {
    //     toast.info('This unique ID already exists.');
    //   }
    // }
  };

  return (
    <>
    <ToastContainer/>
    {
    (!desktop)?(<nav
      className={`fixed z-50 flex shadow-lg shadow-sky-300  items-center border-white border-b-2 justify-between rounded-lg  transition-all duration-300 ease-in-out ${
        scrolled
          ? "w-[93%] mt-2 right-3  shadow-none border border-white backdrop-blur-3xl top-2"
          : "w-full z-50  right-0 top-0  flex items-center justify-between   shadow-2xl rounded-lg"
      } bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_40%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
    >
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          className="mx-4 lg:mx-10 w-10 bg-gray-200 rounded-2xl"
        />
      </div>

      <div className="m-5 flex items-center justify-center gap-4 text-2xl">
        <SiEducative
          className="bg-blue-500 rounded-sm h-6 w-6"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const uniqueID = localStorage.getItem("uniqueID");
            if (
              [
                "ec584647-5f5b-453a-1138-9de4ca03ac33",
                "8d8217ea-332b-4cac-27f1-7b2459d4a6a5",
                "bb8029b9-b265-4b40-318b-816f002153c4",
                "447441dc-2355-4bec-13e9-71ad27f1e367",
              ].includes(uniqueID)
            ) {
              window.open(
                "https://drive.google.com/file/d/1oU9dg8aPEknXu_8EDL-JEaJ6focJDA3B/view?usp=drive_link",
                "_blank"
              );
            } else {
              if (typeof handleEducativeClick === "function") {
                handleEducativeClick();
              }
            }
          }}
        />
        <FaLinkedin
          style={{ cursor: "pointer", backgroundColor: "#274da9" }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/abhishek-vishwakarma-96a847263/")
          }
        />
        <FaInstagramSquare
          style={{ cursor: "pointer", backgroundColor: "#a92487" }}
          onClick={() =>
            window.open("https://www.instagram.com/abhishekvishwakarma23520/")
          }
        />
        <FaSquareGithub
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://github.com/ShidoAKV")}
        />
      </div>
    </nav>):
    (
      <nav className='mb-20 flex items-center justify-between py-6'>
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
                  "https://drive.google.com/file/d/1ljZ6hsIEJ3vFWIFV5V4HlSKsZyMrDi3S/view?usp=drive_link",
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
    )}
    </>
  )
}

export default Navbar

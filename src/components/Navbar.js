import logo from './logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='  mb-20 flex items-center justify-between py-6'>
        <div className=' flex flex-shrink-0 items-center'>
          <img src={logo} alt="logo" className='mx-2 w-10 text-white bg-white rounded-2xl' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
         <FaLinkedin  style={{cursor:"pointer" ,backgroundColor:"#274da9"}} onClick={() => window.open("https://www.linkedin.com/in/abhishek-vishwakarma-96a847263/")}/>
         <FaInstagramSquare  style={{cursor:"pointer",backgroundColor:"#a92487"}} onClick={() => window.open("https://www.instagram.com/abhishekvishwakarma23520/") } />
        <FaSquareGithub  style={{cursor:"pointer"}} onClick={() => window.open("https://github.com/ShidoAKV")}/>
        </div>
    </nav>
  )
}

export default Navbar
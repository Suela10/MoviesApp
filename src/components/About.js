// import React from "react";
// import Logoo from '../images/background1.jpg';

// function About() {
//   return (
//     <div
//       className="about"
//       style={{
//         backgroundImage: `url(${Logoo})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh', // Ensures the background image covers the entire page height
//       }}
//     >
//       {/* Bottom Section with Right Paragraph */}
//       <div className="aboutBottom flex items-center justify-center p-3">
//         {/* Right Side (Paragraph) */}
//         <div className="text-center max-w-2xl mt-60"> {/* Added mt-16 to push the paragraph down */}
//           <h1 className="text-6xl font-bold mb-6 text-white">ABOUT US</h1>
//           <p className="text-white">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </div>
//       </div>

//       {/* Social Media Icons Section */}
//       <div className="socialMediaIcons flex justify-center gap-6 mt-8">
//         <a
//           href="https://www.facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-3xl text-gray-800 hover:text-blue-600"
//         >
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a
//           href="https://www.twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-3xl text-gray-800 hover:text-blue-400"
//         >
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-3xl text-gray-800 hover:text-pink-500"
//         >
//           <i className="fab fa-instagram"></i>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // FontAwesome alternative for Tailwind
import Logoo from '../images/background1.jpg';

function About() {
  return (
    <div
      className="about"
      style={{
        backgroundImage: `url(${Logoo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Bottom Section with Right Paragraph */}
      <div className="aboutBottom flex items-center justify-center p-3">
        <div className="text-center max-w-2xl mt-60">
          <h1 className="text-6xl font-bold mb-6 text-white">ABOUT US</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="socialMediaIcons flex justify-center gap-6 mt-8">
        {/* Facebook */}
        
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-white hover:text-blue-600 transition-transform transform hover:scale-125"
        >
          <FaFacebook style={{width: 30, height: 30}} />
        </a>
        {/* Twitter */}
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-white hover:text-blue-400 transition-transform transform hover:scale-125"
        >
          
          <FaTwitter style={{width: 30, height: 30}} />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-white hover:text-pink-500 transition-transform transform hover:scale-125"
        >
          {/* <FaInstagram /> */}
          <FaInstagram style={{width: 30, height: 30}} />
          
        </a>
      </div>
    </div>
  );
}

export default About;

// src/pages/Auth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo3 from '../../assets/landing-page/logo3.png';
import bgImage from '../../assets/landing-page/bg.jpg';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isLogin) {
      if (email && password) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/music');
      } else {
        alert('Please enter your email and password.');
      }
    } else {
      if (name && email && password) {
        alert('Fake signup success 🎉');
        setIsLogin(true);
      } else {
        alert('Fill all fields to register.');
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-md max-w-sm w-full text-white backdrop-blur-md">
        <div className="flex items-center justify-center mb-6">
          <img src={logo3} alt="Echozy Logo" className="h-[180px] w-auto" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login to Echozy' : 'Create your Echozy Account'}
        </h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 rounded bg-[#1e1b24] text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-[#1e1b24] text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-[#1e1b24] text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {isLogin && (
          <div className="text-right text-sm mb-4 text-purple-300 hover:underline cursor-pointer">
            Forgot Password?
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded font-semibold transition"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <div className="mt-6 text-center text-sm text-purple-300">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className="text-purple-400 underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;




// src/pages/Auth.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo3 from '../../assets/landing-page/logo3.png'
// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     if (isLogin) {
//       if (email && password) {
//         localStorage.setItem('isLoggedIn', 'true');
//         navigate('/music');
//       } else {
//         alert('Please enter your email and password.');
//       }
//     } else {
//       if (name && email && password) {
//         alert('Fake signup success 🎉');
//         setIsLogin(true);
//       } else {
//         alert('Fill all fields to register.');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center  bg-background text-white px-4">
     
//       <div className="bg-black  bg-opacity-80 p-8 rounded-lg shadow-md max-w-sm w-full">
//          <div className='flex items-center justify-center p-auto'> 
//             <img src={logo3} alt="Echozy Logo" className="h-[200px] w-auto " />
//          </div>
       
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {isLogin ? 'Login to Echozy' : 'Create your Echozy Account'}
//         </h2>

//         {!isLogin && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full mb-4 p-2 rounded bg-purple-700 text-white"
//           />
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full mb-4 p-2 rounded bg-purple-700 text-white"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-4 p-2 rounded bg-purple-700 text-white"
//         />

//         {isLogin && (
//           <div className="text-right text-sm mb-4 text-purple-300 hover:underline cursor-pointer">
//             Forgot Password?
//           </div>
//         )}

//         <button
//           onClick={handleSubmit}
//           className="w-full border border-purple-400 hover:bg-purple-600 p-2 rounded transition"
//         >
//           {isLogin ? 'Login' : 'Sign Up'}
//         </button>

//         <div className="mt-6 text-center text-sm text-purple-300">
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//           <span
//             className="text-purple-400 underline cursor-pointer"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? 'Sign Up' : 'Login'}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;



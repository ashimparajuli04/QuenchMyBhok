import React, {useState} from 'react'
import { AnimatePresence, motion } from "framer-motion";

interface LoginProps{
    showLogin:boolean;
    isMobile: boolean;
    onClose:()=>void;
    animationDuration: number;
}

const Login : React.FC<LoginProps> = ({
    showLogin,
    isMobile,
    onClose,
    animationDuration,
}) => {
const [formData, setFormData] = useState({ email: '', password: '' });

const handleInputChange =
  (field: "email" | "password") =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
};


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Logging in with:", formData);
};


  return (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showLogin ? 1 : 0, 
          scale: showLogin ? 1 : 0,
          x: isMobile ? 0 : undefined,
          y: isMobile ? 0 : undefined
        }}
        transition={{
          duration: animationDuration,
          scale: { type: "spring", visualDuration: animationDuration, bounce: 0.3 },
        }}
        className={`absolute z-30 flex justify-center items-center pr-4 ${
          isMobile 
            ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
            : "top-0 left-[50vw] h-full w-[50vw]"
        }`}
      >
        <div className="bg-yellowish w-full max-w-2xl md:w-[55rem] md:h-[50rem] lg:w-[60rem] xl:w-[65rem] lg:h-[55rem] rounded-[49px] border-4 md:border-5 border-dark-purple p-6 md:p-8 lg:p-12">
          
          {/* Greeting */}
          <p className="text-pinkish text-3xl md:text-4xl lg:text-[2.7vw] font-bagel mb-4">
            Hi!
          </p>
          
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-dark-purple text-center font-robotoSlab mb-6">
              Sign in to continue
            </h1>
            
            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-black font-extrabold text-lg md:text-xl font-robotoSlab mb-2"
              >
                E-mail or username
              </label>
              <input
                type="text"
                placeholder="Username or Email"
                value={formData.email}
                onChange={handleInputChange("email")}
                className="w-full border py-3 md:py-4 px-4 rounded-md bg-[#EFEFEF] border-[#D8D2D2] text-black text-base md:text-lg font-robotoSlab focus:outline-none focus:ring-2 focus:ring-dark-purple focus:border-transparent"
                required
              />
            </div>
            
            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-black font-extrabold text-lg md:text-xl font-robotoSlab mb-2"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password here"
                value={formData.password}
                onChange={handleInputChange("password")}
                className="w-full border py-3 md:py-4 px-4 rounded-md bg-[#EFEFEF] border-[#D8D2D2] text-black text-base md:text-lg font-robotoSlab focus:outline-none focus:ring-2 focus:ring-dark-purple focus:border-transparent"
                required
              />
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button 
                type="submit"
                className="w-2/5 bg-dark-purple text-white py-2 md:py-3 px-6 rounded-md hover:bg-purple-800 active:bg-purple-900 transition-colors duration-200 text-lg md:text-xl lg:text-2xl font-extrabold font-robotoSlab focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                Sign In
              </button>
            </div>
            
            {/* Create Account Link */}
            <button
              type="button"
              className="w-full text-black font-extrabold text-lg md:text-xl font-robotoSlab text-center mt-4 hover:text-dark-purple transition-colors duration-200 focus:outline-none focus:underline"
              onClick={() => console.log('Navigate to sign up')}
            >
              Create new account
            </button>
          </form>
          
          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-dark-purple text-2xl font-bold hover:text-purple-800 focus:outline-none"
              aria-label="Close login form"
            >
              ×
            </button>
          )}
        </div>
      </motion.div>
  )
}

export default Login
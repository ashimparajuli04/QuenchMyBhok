'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import CircleArrowButton from "@/components/CircleArrowButton";
import Logo from "@/components/Logo";
import StaggeredText from "@/components/animations/StaggeredText";
import { AnimatePresence, motion } from "framer-motion";

const ANIMATION_DURATION = 0.3;

const Page = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleShowLogin = () => {
    setShowLogin(prev => !prev);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="w-screen h-screen bg-pinkish flex justify-center items-center relative overflow-hidden">
      
      {/* Overlay for closing login on mobile */}
      {showLogin && isMobile && (
        <div 
          className="absolute inset-0 bg-black bg-opacity-20 z-10"
          onClick={handleCloseLogin}
        />
      )}

      {/* Main content area */}
      <motion.div
        animate={{ 
          x: showLogin ? (isMobile ? "0" : "-25vw") : "0vw",
          y: showLogin ? (isMobile ? "-20vh" : "0") : "0vw",
          width: showLogin ? (isMobile ? "80vw" : "40vw") : (isMobile ? "90vw" : "45vw")
        }}
        transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }} 
        className="w-[90vw] md:w-[50vw] aspect-square flex flex-col absolute justify-center items-center z-20"
        onClick={showLogin && !isMobile ? handleCloseLogin : undefined}
      >
        {/* Logo */}
        <div className="relative w-full aspect-[730/156]">
          <Logo className="object-contain w-full h-full text-yellowish" />
        </div>

        {/* Tagline */}
        <StaggeredText 
          el="p" 
          className="font-jolly text-2xl md:text-3xl lg:text-[3.5vw] text-dark-purple text-center"
        >
          Perfect for your cravings!
        </StaggeredText>

        {/* Arrow Button */}
        <AnimatePresence>
          {!showLogin && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex justify-center my-4"
            >
              <CircleArrowButton
                className="text-yellowish w-12 h-12 md:w-16 md:h-16 lg:w-[5vw] lg:h-[5vw] cursor-pointer"
                onClick={handleShowLogin}
                aria-label="Show login form"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chicken Image */}
        <div className="relative w-full h-[30vh] md:h-[40%] aspect-[751/404] mt-2">
          <Image 
            src="/chicken.svg" 
            alt="Cartoon chicken character enjoying delicious food"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showLogin ? 1 : 0, 
          scale: showLogin ? 1 : 0,
          x: isMobile ? 0 : undefined,
          y: isMobile ? 0 : undefined
        }}
        transition={{
          duration: ANIMATION_DURATION,
          scale: { type: "spring", visualDuration: ANIMATION_DURATION, bounce: 0.1 },
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
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="example@gmail.com"
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
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange('password')}
                placeholder="Enter your password"
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
              onClick={handleCloseLogin}
              className="absolute top-4 right-4 text-dark-purple text-2xl font-bold hover:text-purple-800 focus:outline-none"
              aria-label="Close login form"
            >
              ×
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
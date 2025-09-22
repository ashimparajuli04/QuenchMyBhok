'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

import Splash from '@/components/Splash'
import Login from "@/components/Login";

import { AnimatePresence, motion } from "framer-motion";

const ANIMATION_DURATION = 0.3;

const Page = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className={`w-screen h-screen bg-pinkish flex relative overflow-hidden ${
      isMobile
      ?"pt-[20vw] flex-col items-center justify-start"
      :"items-center justify-center"
      }`}>
        
      {/* Main content area */}
      <Splash
        showLogin={showLogin}
        isMobile={isMobile}
        onShowLogin={handleShowLogin}
        onClose={handleCloseLogin}
        animationDuration={0.3}
      />

      {/* Login Form */}
      <Login
        showLogin={showLogin}
        isMobile={isMobile}
        onClose={handleCloseLogin}
        animationDuration={0.3}
        ></Login>
    </div>
  );
};

export default Page;

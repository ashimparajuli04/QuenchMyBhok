'use client'
import React from 'react'
import Image from "next/image";

import Logo from "@/components/Logo";
import StaggeredText from "@/components/animations/StaggeredText";
import CircleArrowButton from "@/components/ui/CircleArrowButton";

import { AnimatePresence, motion } from "framer-motion";

interface SplashProps{
    showLogin: boolean;
    isMobile: boolean;
    onShowLogin: () => void;
    onClose: () => void;
    animationDuration: number;
}

const Splash : React.FC<SplashProps> = ({
    showLogin,
    isMobile,
    onShowLogin,
    onClose,
    animationDuration,
}) => {
  return (
      <motion.div
        animate={{ 
          x: showLogin ? (isMobile ? "0" : "-25vw") : "0vw",
          y: showLogin ? (isMobile ? "-20vh" : "0") : "0vw",
          width: showLogin ? (isMobile ? "80vw" : "40vw") : (isMobile ? "90vw" : "45vw")
        }}
        transition={{ duration: animationDuration, ease: "easeInOut" }} 
        className="w-[90vw] md:w-[50vw] aspect-square flex flex-col absolute justify-center items-center z-20"
        onClick={showLogin && !isMobile ? onClose : undefined}
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
                onClick={onShowLogin}
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
  )
}

export default Splash
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginSign from "./LoginSign";
import Draggable from "react-draggable";
import { useRef } from "react";

interface LoginProps {
  showLogin: boolean;
  isMobile: boolean;
  onClose: () => void;
  animationDuration: number;
}

const Login: React.FC<LoginProps> = ({
  showLogin,
  isMobile,
  onClose,
  animationDuration,
}) => {
  const nodeRef = useRef(null);
  return (
    <AnimatePresence>
      {showLogin && (
        <motion.div
          key="login"
          initial={{ opacity: 0, x: "100%" }} // start offscreen (right)
          animate={{ opacity: 1, x: 0 }} // slide into view
          exit={{ opacity: 0, x: "100%" }} // slide out to right
          transition={{
            duration: animationDuration,
            ease: "easeInOut",
          }}
          className={`bg-gradient-to-r from-pinkish from-[20%] via-pinkish via-[40%] to-yellowish/60 to-[100%] absolute flex justify-center items-center pr-4  ${
            isMobile
              ? "translate-y-10 z-2"
              : "top-0 left-[50vw] h-full w-[50vw]"
          }`}
        >
        <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="relative z-2" > 
        {/* inner div handles hover scale & transitions */}
        <div
          className="w-full max-w-xl md:w-[55rem] lg:w-[60rem] xl:w-[65rem] p-6 text-black backdrop-blur-sm border bg-yellowish/10 border-pinkish/70 rounded-lg 
          shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] 
          inset-0 bg-gradient-to-br via-transparent to-transparent 
          transition-transform duration-300 hover:scale-102"
        >
            {/* Greeting */}
            <div className="w-full flex items-start justify-start">
              <div className="flex justify-start w-[50%]">
                <p className=" text-yellowish text-3xl md:text-4xl lg:text-[2.7vw] font-bagel mb-4">
                  Hi!
                </p>
              </div>

              {isMobile && (
                <div className="w-[50%] flex justify-end">
                  <button
                    onClick={onClose}
                    className="text-dark-purple text-2xl font-bold hover:text-purple-800 focus:outline-none"
                    aria-label="Close login form"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            <LoginSign />
          </div>
          </div>
          </Draggable>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;

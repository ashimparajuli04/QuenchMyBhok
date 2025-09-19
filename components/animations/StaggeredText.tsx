"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { ElementType } from "react";

type StaggeredTextProps = {
  children: string;
  el?: ElementType; // ✅ Fix here
  className?: string;
  once?: boolean;
};

export default function StaggeredText({
  children,
  el: Wrapper = "p",
  className,
  once = true,
}: StaggeredTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const shouldReduceMotion = useReducedMotion();
  const charArray = children.split("");

  const animationVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 },
        },
      };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        aria-hidden>
        {charArray.map((char, index) => (
          <motion.span key={index} variants={animationVariants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

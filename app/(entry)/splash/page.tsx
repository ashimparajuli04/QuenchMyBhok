'use client'
import Image from "next/image";
import CircleArrowButton from "@/components/CircleArrowButton"
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-pinkish flex flex-col items-center justify-center space-y ">
      <div className="-translate-y-1 flex flex-col items-center justify-center">
        <div className="w-183 h-48">
          <Image 
            src="/Logo.svg" 
            alt="Logo"
            fill
            className=""
            />
        </div>
        <p className="text-[80px] text-dark-purple font-jolly pt-4">Amez chor, desh chod</p>
      </div>
      <div className="flex items-center justify-center">
      <Link href="/login"><CircleArrowButton/></Link>
      </div>
    </div>
  );
};

export default Page;

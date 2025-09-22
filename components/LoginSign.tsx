import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginSign = () => {
  return (
    <div className="space-y-6 md:space-y-8 w-full">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-dark-purple text-center font-robotoSlab mb-6">
        Sign in to continue
      </h1>

      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-semi-bold">
              Email or Username
            </Label>
            <Input
              id="identification"
              type="text"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="font-semi-bold">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline font-bold"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password here"
              required
            />
          </div>
        </div>
      </form>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="flex items-center gap-10 w-full">
          <hr className="flex-1 border-t-2 border-dark-purple rounded-2xl" />
          <Label className=" text-black font-extrabold text-lg md:text-xl font-robotoSlab">
            Or
          </Label>
          <hr className="flex-1 border-t-2 border-dark-purple rounded-2xl" />
        </div>
        <div className='flex w-full gap-5'>
        <Button variant="default" className="w-full">
          <div className="relative w-5 h-5">
            <img
            src='/google.svg'
            alt='google'
            >
            </img>
          </div>
        Login with Google
        </Button>
        <Button variant='default' className="w-full">Sign Up</Button>
        </div>
      </CardFooter>
    </div>
  );
};

export default LoginSign;

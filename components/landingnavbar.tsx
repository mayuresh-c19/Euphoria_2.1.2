"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm")}>
                <div className="flex items-center gap-x-4">
                    <a href="#" className="text-3xl italic font-s text-pretty dark:text-primary-dark">BeatMarket</a>
                </div>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <Button 
                variant="secondary" 
                className="hidden md:block text-lg font-semibold text-primary dark:text-primary-dark hover:bg-blue-600 hover:text-white"
                onClick={() => navigate('/login')}
                
                >
                    Login</Button>
                <Button 
                variant="secondary" 
                className="hidden md:block text-lg font-semibold text-primary dark:text-primary-dark  hover:bg-blue-600 hover:text-white"
                onClick={() => navigate('/signup')}
                >
                    Sign Up</Button>
            </div>
        </div>
    )
}
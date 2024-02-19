"use client";

import Explore from "@/app/pages/explore";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";

import { useNavigate } from "react-router-dom";

export const ExpNavbar = () => {

    const navigate = useNavigate();
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm")}>
                <div className="flex items-center gap-x-4">
                <img className=" w-10 h-10 mr-3"src="../assets/mu.png" alt="" />
                    <a href="#" className="text-3xl font-serif font-bold text-pretty dark:text-primary-dark">Let's Explore</a>
                </div>
            
        </div>
    )
}

export default ExpNavbar;
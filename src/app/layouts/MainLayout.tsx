'use client'
import { usePathname } from "next/navigation";
import React from "react";
import TopNav from "./includes/TopNav";
import SideNavMain from "./includes/SideNavMain";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    return (
        <>  
            <TopNav/>
            <div className={`w-full lg:ps-[15%] ps-[15%] px-0 ${pathname == '/' ? '' : ''}`}>
                <SideNavMain/>
                {children}
            </div>
        </>
    )
}
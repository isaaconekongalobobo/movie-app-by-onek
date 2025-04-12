"use client"

import React from 'react';
import Onglet, { OngletType } from './onglet';
import { Key } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

const ongletList: OngletType[] = [
    { href: "/home", text: "Accueil" },
    { href: "/films", text: "Films" },
    { href: "/series", text: "Series" },
    { href: "/playist", text: "Ma playlist" },
]
const Header = () => {
    const userConnected = useUser().user
    const imageProfile = userConnected?.imageUrl ? userConnected?.imageUrl : '/images/userConnectedIcon.png'
    return (
        <header className="bg-[#010B13] flex justify-between px-4 sm:px-8 py-3 sm:py-5 items-center  " >
            <h1 className='sm:text-xl font-semibold text-[#FF0800] '>Movie App <mark className='bg-white text-[#FF0800] sm:px-4 px-1 py-1 font-bold sm:text-2xl rounded '>by Onek</mark></h1>
            <nav className=" hidden sm:flex flex-row justify-center gap-16 w-2/4  ">
                {
                    ongletList.map ((onglet, key) => <Onglet href={onglet.href} text={onglet.text}/> )
                }  
            </nav>  
            <div className='flex flex-row justify-center gap-2 items-center'>
                <div className="bg-center bg-cover size-8 sm:size-10 rounded-full" style={{ backgroundImage: `url(${imageProfile})` }}/>
                <span> {userConnected?.fullName} </span>
            </div>          
        </header>

    );
}

export default Header;

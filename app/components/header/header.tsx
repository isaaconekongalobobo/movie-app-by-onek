"use client"

import React, { useEffect, useState } from 'react';
import Onglet, { OngletType } from './onglet';
import { useUser } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import UserProfileContainer from '../userProfile/userProfileContainer';
import { redirect } from 'next/navigation'
import { useUserConnected } from '@/app/store/userConnected';

const ongletList: OngletType[] = [
    { href: "/home", text: "Accueil" },
    { href: "/films", text: "Films" },
    { href: "/series", text: "Series" },
    { href: "/actors", text: "Acteurs" },
]
const Header = () => {
    const googleUser = useUser()
    const imageProfile = useUser().user?.imageUrl ? useUser().user?.imageUrl : '/images/userConnectedIcon.png'
    const [ showProfileContainer, setShowProfileContainer ] = useState(false)
    const { userConnected, setUserConnected } = useUserConnected()

    if (!userConnected) {
        return null
    }

    return (
        <header className={`bg-[#010B13] flex justify-between px-8 sm:px-8 py-5 items-center`} >
            <h1 className=' text-xl sm:text-xl font-semibold text-[#FF0800] '>Movie App <mark className='bg-white text-[#FF0800] sm:px-4 px-1 py-1 font-bold sm:text-2xl rounded '>by Onek</mark></h1>
            <nav className=" hidden sm:flex flex-row justify-center gap-16 w-2/4  ">
                {
                    ongletList.map ((onglet, key) => <Onglet key={key} href={onglet.href} text={onglet.text}/> )
                }  
            </nav>  
            <div className='hidden sm:flex flex-row justify-center gap-2 items-center cursor-pointer' title='Votre profile' onClick={() => setShowProfileContainer (true)}>
                <div className="bg-center bg-cover size-8 sm:size-10 rounded-full" style={{ backgroundImage: `url(${imageProfile})` }}/>
                <span> {` ${userConnected.firstName} ${userConnected.lastName} `} </span>
            </div>
            <AnimatePresence>
                { showProfileContainer && userConnected  && <UserProfileContainer showContainer={showProfileContainer} setShowContainer={setShowProfileContainer}/>  }
            </AnimatePresence>
        </header>

    );
}

export default Header;

"use client"

import React from 'react';
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { motion } from 'framer-motion';
import { useAuth, useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useUserConnected } from '@/app/store/userConnected';

interface userProfileContainerType {
    showContainer: boolean,
    setShowContainer: React.Dispatch<React.SetStateAction<boolean>>
}

const containerVariant = {
    initial: {
        y: -10,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

const UserProfileContainer = ({showContainer, setShowContainer} : userProfileContainerType) => {
    const { signOut } = useAuth()
    const userConnected = useUserConnected((state) => state.userConnected);
    const setUserConnected = useUserConnected((state) => state.setUserConnected);

    const SignOut = async () => {
        await signOut().then(() => {
            setUserConnected(null)
            setShowContainer(false)
            redirect ("/")
        }).catch (() => {
            alert ("Une erreur c'est produite lors de la déconnexion")
        })
    }

    return (
        <motion.div variants={containerVariant} initial="initial" animate="animate" exit={{ y: -10, opacity: 0 }}  className=' w-60 p-4 bg-white absolute top-24 right-6 text-black rounded border-2 hover:border-[#FF0800] flex flex-col items-center justify-center gap-4 z-20 '>
            <header className='flex items-center justify-between sm:gap-24 '>
                <h1>Votre profile</h1>
                <MdOutlineCloseFullscreen onClick={() => setShowContainer (false)}  />
            </header>
            <main>
                <div className="bg-center bg-cover size-8 sm:size-52 rounded" style={{ backgroundImage: `url(${userConnected?.profilImage ? userConnected?.profilImage : "/images/person.png"})` }}/>
            </main>
            <button className='bg-[#FF0800] hover:bg-[#FF0800CC] hover:text-white px-8 py-2 rounded-sm font-semibold cursor-pointer' onClick={() => SignOut()}>Se deconnecter</button>
        </motion.div>
    );
}

export default UserProfileContainer;

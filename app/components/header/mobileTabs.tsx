import Link from 'next/link';
import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoFilmSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { FaPersonRays } from "react-icons/fa6";

const tabList = [
  { href: "/home", text: "Accueil" },
  { href: "/films", text: "Films" },
  { href: "/series", text: "Series" },
  { href: "/actors", text: "Acteurs" },
]


const MobileTabs = () => {
    return (
        <div className='bg-red-900 h-14 w-[90%] fixed z-30 bottom-5 rounded-xl px-5 py-2 flex justify-between gap-5 sm:hidden '>
            <Link href={"/home"}>
                <div className='flex flex-col items-center'>
                    <FaHome size={22} />
                    <span className='text-sm' > Accueil</span>
                </div>
            </Link>
            <Link href={"/films"}>
                <div className='flex flex-col items-center'>
                    <IoFilmSharp size={22} />
                    <span className='text-sm' > Films</span>
                </div>
            </Link>
            <Link href={"/series"}>
                <div className='flex flex-col items-center'>
                    <RiMovie2Fill size={22} />
                    <span className='text-sm' > Series</span>
                </div>
            </Link>
            <Link href={"/actors"}>
                <div className='flex flex-col items-center'>
                    <FaPersonRays size={22} />
                    <span className='text-sm' > Acteurs</span>
                </div>
            </Link>
        </div>
    );
}

export default MobileTabs;

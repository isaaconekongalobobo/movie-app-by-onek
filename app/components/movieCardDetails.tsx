import { title } from 'process';
import React, { useState } from 'react';
import { motion } from 'framer-motion'
interface MovieCardDetailsType {
    title: string,
    popularity: number
}


const MovieCardDetails = ({ title, popularity}: MovieCardDetailsType) => {
    const [ popularityColor, setPopularityColor ] = useState('#000')
    const changeToWhite = () => setPopularityColor('#ffffff') 
    const changeBlack = () => setPopularityColor('#000') 
    return (
        <motion.div 
        initial={{ x: 20, opacity: 0 }} 
        animate={{ x: 0, opacity: 1}} 
        onMouseOver={() => changeToWhite()} onMouseLeave={() => changeBlack()}
        className='bg-white hover:bg-black text-black relative w-[70%] pl-4 sm:pl-10 py-2 rounded rounded-l-full'>
            <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.5 }}} className='text-red-500 font-medium text-xl'> {title} </motion.h1>
            <h2 style={{ color: popularityColor }} className='text-sm'> {popularity} vues </h2>
        </motion.div>
    );
}

export default MovieCardDetails;

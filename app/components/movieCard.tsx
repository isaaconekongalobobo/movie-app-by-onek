import React, { useState } from 'react';
import { motion } from 'framer-motion'

interface movieCardType {
    img: string,
    title: string,
    popularity: number
}
const MovieCard = ({ img, title, popularity }: movieCardType) => {
    const [ showDetails, setShowDetails ] = useState(false);
    return (
        <motion.div 
        whileHover={{ scale: 1.1 }} 
        style={{ backgroundImage: `url('${img}')` }} 
        onMouseOver={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}
        className='bg-cover bg-center w-[20rem] h-[25rem] rounded-xl flex flex-col justify-center items-end'>
            {
                showDetails && (
                    <div className='bg-white text-black relative w-[70%] pl-4 py-2 rounded '>
                        <h1 className='text-red-500 font-medium text-xl'> {title} </h1>
                        <h2> {popularity} </h2>
                    </div>
                )
            }
        </motion.div>
    );
}

export default MovieCard;

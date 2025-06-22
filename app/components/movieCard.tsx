import React, { useState } from 'react';
import { motion } from 'framer-motion'
import MovieCardDetails from './movieCardDetails';
import Link from 'next/link';

interface movieCardType {
    id: number;
    img: string,
    title: string,
    popularity: number
}
const MovieCard = ({ id, img, title, popularity }: movieCardType) => {
    const [ showDetails, setShowDetails ] = useState(false);
    return (
        <Link href={`/movie/details/${id}`}>
            <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
            whileHover={{ scale: 1.1 }} 
            style={{ backgroundImage: `url('${img}')` }} 
            onMouseOver={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}
            className='bg-cover bg-center w-[20rem] h-[25rem] rounded-xl flex flex-col justify-center items-end'>
                {
                    showDetails && <MovieCardDetails title={title} popularity={popularity}/>
                }
            </motion.div>        
        </Link>

    );
}

export default MovieCard;

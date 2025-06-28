import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductionCompany } from '@/app/types/allTypes';
import { truncateByWords } from '@/utils/StringUtils';
interface MovieSegonddetailsType {
    backdropPath: string | null,
    producers: ProductionCompany[] | null
}


const movieSegonddetailsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const MovieSegonddetails = ({ backdropPath, producers}: MovieSegonddetailsType) => {
    return (
        <motion.div  initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="mt-2 flex flex-col sm:flex-row gap-5 ">
            <div className="bg-center bg-cover h-56 w-full sm:w-1/4 rounded-2xl" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w780${backdropPath}')`}}/>
            <div className='sm:w-3/4 flex flex-col gap-5'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-xl font-semibold'>Production</h2>
                    <hr />
                </div>
                <div className="flex gap-6 overflow-x-auto flex-nowrap pb-2 scrollbar-hide">
                    {producers?.map(producer => (
                        <ProducerCard key={producer.id} name={producer.name} logo_path={producer.logo_path} origin_country={producer.origin_country}/>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

const ProducerImage = ({ logoPath, name }: { logoPath: string | null, name: string }) => {
  if (!logoPath) return null;

  return (
    <div className=" size-24 p-2 flex items-center justify-center bg-white rounded-2xl shadow">
      <img src={`https://image.tmdb.org/t/p/w500${logoPath}`}
        alt={name}
        title={name}
        className="h-full w-full object-contain"
      />
    </div>
  );
};


const ProducerCard = ({ logo_path, name, origin_country}: ProductionCompany) => {
    return (
        <div className='flex flex-col gap-1'>
            <ProducerImage logoPath={logo_path} name={name} />
            <div>
                <h3 className='opacity-90 font-medium'> { truncateByWords(name, 2)}</h3>
                <span className='backdrop-opacity-80 italic text-xs'> { origin_country === "US" ? "Etats Unis" : origin_country } </span>                
            </div>
        </div>
    )
}

export default MovieSegonddetails;

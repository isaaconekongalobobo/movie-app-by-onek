import React from 'react';
import { MdOutlineCloseFullscreen } from "react-icons/md";

interface userProfileContainerType {
    showContainer: boolean,
    hiddeContainer: () => void
}

const UserProfileContainer = ({showContainer, hiddeContainer} : userProfileContainerType) => {
    return (
        <div className='h-40 w-60 p-4 bg-white absolute top-24 right-6 text-black rounded '>
            <header className='flex items-center justify-between '>
                <h1>Votre profile</h1>
                <MdOutlineCloseFullscreen onAuxClick={hiddeContainer} />
            </header>
        </div>
    );
}

export default UserProfileContainer;

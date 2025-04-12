"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface OngletType {
    href: string,
    text: string
}

const Onglet = ({href, text}: OngletType) => {
    const pathname = usePathname()
    const isActive = pathname == href
    return (
        <Link href={href}>
            <span className={` ${ isActive && 'text-[#FF0800] '} `}> {text} </span>
        </Link>
    );
}

export default Onglet;

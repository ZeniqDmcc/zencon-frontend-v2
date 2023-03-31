import React from 'react'
import Image from 'next/image'
import zeniq from "../../public/assets/zeniq.png";

export const Loading = () => {
    return (
        <div className="loading-container">
            <Image src={zeniq} alt="Javascript" width={80} height={80}/>
        </div>
    )
}
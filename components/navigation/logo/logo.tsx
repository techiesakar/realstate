import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type LogoProps = {
    imageUrl: string,
}
export const Logo = ({ imageUrl }: LogoProps) => {
    return (
        <Link href="/">

            <Image src={imageUrl} alt="houzez" width={127} height={24} />
        </Link>
    )
}

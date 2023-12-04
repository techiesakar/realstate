"use client"
import React from 'react'
import { HeroForm } from './hero-form'
import Image from 'next/image'

export const HeroSection = () => {
    return (
        <section className='bg-primary py-10'>
            <div className='site-container flex justify-between items-center'>
                <div className="left text-white w-1/2 flex flex-col gap-6 relative z-50">
                    <h1 className='text-5xl font-semibold mb-3'>The home you're dreaming of is waiting for you
                    </h1>
                    <p className='font-light text-lg  text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <HeroForm />


                </div>
                <div className="right w-1/2 h-[620px] relative z-30">
                    <Image src="/banner.jpg" fill alt='' className='w-full h-full object-cover' />
                </div>
            </div>
        </section>
    )
}

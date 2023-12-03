import React from 'react'
import { FeaturedCard, FeaturedCardWrapper } from './featured-card-wrapper'

export const FeaturedSection = () => {
    return (
        <section>
            <div className='site-container mx-auto pt-20'>
                <div className="section-title text-secondary uppercase font-bold mb-5">
                    Featured Properties
                </div>
                <h2 className='text-3xl font-semibold text-gray-800 mb-8'>Finest selection of our properties</h2>
                <div>
                    <FeaturedCardWrapper />
                </div>

            </div>
        </section>
    )
}

import React from 'react'
import TestimonialCardWrapper from './testimomial-card-wrapper'

export const TestimonailSection = () => {
    return (
        <section>
            <div className='site-container mx-auto py-20'>
                <div className="section-title text-secondary uppercase font-bold mb-5">
                    Testimonials
                </div>
                <h2 className='text-3xl font-semibold text-gray-800 mb-8'>What customers are saying</h2>
                <div>
                    <TestimonialCardWrapper />
                </div>

            </div>
        </section>
    )
}

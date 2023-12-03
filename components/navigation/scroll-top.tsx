"use client"
import { cn } from '@/lib/utils'
import { ArrowUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            }
            else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div onClick={ScrollToTop} className={cn("bg-secondary hidden fixed bottom-8 right-8 hover:bg-hover transition-all cursor-pointer text-white p-2 rounded", isVisible === true && "block")}>   <ArrowUp /></div>
    )
}

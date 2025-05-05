'use client'
import { useState, useEffect } from 'react';

const getNewPercentage = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (docHeight === 0) return;

    const scrollPercent = (scrollTop / docHeight) * 100;

    return scrollPercent
}

export function useProgress() {
    const [scrollSize, setScrollSize] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollSize(getNewPercentage());
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);



    return scrollSize;
}

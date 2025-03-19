import { useState, useEffect } from 'react'
import s from './styles.module.sass'

const ProgressBar = () => {
    const [scrollSize, setscrollSize] = useState(0)

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        const scrollPercent = (scrollTop / docHeight) * 100
        setscrollSize(scrollPercent)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={s.progress_bar}>
            <div
                className={s.progress_thumb}
                style={{ width: `${scrollSize}%` }}
            />
        </div>
    )
}

export default ProgressBar

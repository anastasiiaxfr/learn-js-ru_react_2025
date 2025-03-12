import React from 'react'
import s from './styles.module.sass'

function Tags({ data, setCurrentTab, selected }) {
    return (
        <div className={s.tags}>
            {data.map((tag, ind) => (
                <button
                    className={`${s.tag} ${tag === selected ? s.active : ''}`}
                    key={ind}
                    onClick={() => setCurrentTab(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    )
}

export default Tags

import React from 'react'
import s from './styles.module.sass'
import classNames from 'classnames'

function Tags({ data, setCurrentTab, selected }) {
    return (
        <div className={s.tags}>
            {data.map((tag) => (
                <button
                    className={classNames(
                        s.tag,
                        tag.name === selected ? s.active : ''
                    )}
                    key={tag.id}
                    onClick={() => setCurrentTab(tag)}
                >
                    {tag.name}
                </button>
            ))}
        </div>
    )
}

export default Tags

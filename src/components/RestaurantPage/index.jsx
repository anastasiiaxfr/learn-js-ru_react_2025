import { useState, useEffect } from 'react'
import Card from './Card'
import Tags from '../Tags'

const defaultTab = {
    id: 0,
    name: 'All',
}

function Restauraunt({ data }) {
    const allRestaurantCat = [
        ...new Set(
            data
                .filter((cat) => cat.name)
                .map((cat) => ({
                    id: cat.id,
                    name: cat.name,
                }))
        ),
    ]

    const [currentTab, setCurrentTab] = useState(defaultTab)
    const [currentRes, setCurrentRes] = useState(data)

    useEffect(() => {
        if (currentTab.name === 'All') {
            setCurrentRes(data)
        } else {
            setCurrentRes([
                data.find((restaurant) => restaurant.id === currentTab.id),
            ])
        }
    }, [currentTab, data])
    return (
        <>
            <section>
                <div className="container">
                    <Tags
                        data={[defaultTab, ...allRestaurantCat]}
                        setCurrentTab={setCurrentTab}
                        selected={currentTab}
                    />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="cards">
                        {currentRes.length === 1 ? (
                            <Card data={currentRes[0]} id={currentRes[0].id} />
                        ) : (
                            currentRes.map((res) => (
                                <Card data={res} key={res.id} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Restauraunt

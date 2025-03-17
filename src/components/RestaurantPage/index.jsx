import { useState } from 'react'
import Card from './Card'
import Tags from '../Tags'
import ReviwForm from '../ReviewForm'

const defaultTab = {
    id: 0,
    name: 'All',
}

const countDishesRange = {
    min: 0,
    max: 5,
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

    const currentRestaraunt =
        currentTab.name === 'All'
            ? data
            : data.find((restaurant) => restaurant.id === currentTab.id)

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
                        {currentRestaraunt.length ? (
                            currentRestaraunt.map((restaurant) => (
                                <Card
                                    data={restaurant}
                                    key={restaurant.id}
                                    countDishesRange={countDishesRange}
                                />
                            ))
                        ) : (
                            <>
                                <div>
                                    <Card
                                        data={currentRestaraunt}
                                        id={currentRestaraunt.id}
                                        countDishesRange={countDishesRange}
                                    />
                                    <ReviwForm />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Restauraunt

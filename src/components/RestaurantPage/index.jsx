import { useState } from 'react'
import s from './styles.module.sass'
import Card from './Card'
import Tags from '../Tags'
import ReviwForm from '../ReviewForm'
import { defaultTab, countDishesRange, allRestaurantCat } from './constants.js'

function Restauraunt({ data }) {
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
                    <div className={s.cards}>
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

import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Card from './components/Cards/Restaurant'
import Tags from './components/Tags'

function App({ data }) {
    const allRestaurantCat = [
        ...new Set(data.filter(cat => cat.name).map(cat => cat.name))
    ]

    const [currentTab, setCurrentTab] = useState('All')

    const filteredData =
        currentTab === 'All'
            ? data
            : data.filter(restaurant => restaurant.name === currentTab)

    return (
        <Layout>
            <section>
                <div className="container">
                    <Tags
                        data={['All', ...allRestaurantCat]}
                        setCurrentTab={setCurrentTab}
                        selected={currentTab}
                    />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="cards">
                        {filteredData.map(restaurant => (
                            <Card data={restaurant} key={restaurant.id} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default App

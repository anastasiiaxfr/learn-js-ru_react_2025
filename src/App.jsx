import Layout from './components/Layout/Layout'
import Restauraunt from './components/RestaurantPage'

function App({ data }) {
    
    return (
        <Layout>
           <Restauraunt data={data} />
        </Layout>
    )
}

export default App

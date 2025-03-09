import Card from "./components/restaurant-card"

function App({ data }) {

  return (
    <>
      <main>
        <div className="container">
          <section className="cards">
            {data.map((restaurant) => (
              <Card data={restaurant} key={restaurant.id} />
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

export default App

const Welcome = (activeDog) => {
    return (
        <section>
            <h1>Welcome to Doggy daycare</h1>
            <p>We love our job!</p>
            <button onClick={() => {
                console.log(activeDog.name)
            }}>print</button>
        </section>
    )
}

export default Welcome;
import { useState } from "react";

const Info = ({activeDog}) => {


    return (
        <section>
            <p>Info</p>
            <p>{activeDog.name}</p>
            <button onClick={() => {
                console.log(activeDog.name)
            }}>print</button>
        </section>
    )
}

export default Info;
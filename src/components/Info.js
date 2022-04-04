import { useState } from "react";

const Info = ({activeDog}) => {


    return (
        <section className="info-section">
            <img src={activeDog.img} alt="Picture of a dog" />
            <div className="info-text">
             <p>Namn: {activeDog.name}</p>
             <p>Ras: {activeDog.breed}</p>
             <p>Kön: {activeDog.sex}</p>
             <p>Ålder: {activeDog.age}</p>
             <p>Ägare: {activeDog.owner.name} {activeDog.owner.lastName}</p>
            </div>
        </section>
    )
}

export default Info;
import { useState } from "react";
import dogHeader from '../images/dogsplayingheader.jpg';
import '../styling/info.css';

const Info = ({activeDog}) => {


    return (
        <section className="info-section">
            <div className='small-header-image-container'>
                <img src={dogHeader} className="small-header-image"/>
            </div>
            
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
import { useState } from "react";
import dogHeader from '../images/dogsplayingheader.jpg';
import '../styling/info.css';

const Info = ({activeDog}) => {


    return (
        <section className="info-section">
            <div className='small-header-image-container'>
                <img src={dogHeader} className="small-header-image"/>
            </div>
            <div className="dog-info-container">
                <img src={activeDog.img} alt="Picture of a dog" />
                <div className="info-text-container">
                    <p><span className="bold">Name:  </span>{activeDog.name}</p>
                    <p><span className="bold">Breed:  </span>{activeDog.breed}</p>
                    <p><span className="bold">Gender:  </span>{activeDog.sex}</p>
                    <p><span className="bold">Age:  </span>{activeDog.age}</p>
                    <p><span className="bold">Owner:  </span>{activeDog.owner.name} {activeDog.owner.lastName}</p>
                </div>
            </div>
            
        </section>
    )
}

export default Info;
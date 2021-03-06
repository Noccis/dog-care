import dogHeader from '../images/dogsplayingheader.jpg';
import '../styling/info.css';
import backButton from '../images/backArrow.png';
import { Link } from "react-router-dom";

/* Component that takes in a dog that the user picked and shows more detailed information about it */
const Info = ({activeDog}) => {

    return (
        <section className="info-section">
            <div className='small-header-image-container'>
                <img src={dogHeader} className="small-header-image"/>
            </div>

            <Link to={"/register"} className="back-container">
                <img src={backButton}/>
                <p>Back</p>
            </Link>

            <div className="dog-info-container">
                <img src={activeDog.img} alt="Picture of a dog" />
                <div className="info-text-container">
                    <p><span className="bold">Name:  </span>{activeDog.name}</p>
                    <p><span className="bold">Breed:  </span>{activeDog.breed}</p>
                    <p><span className="bold">Gender:  </span>{activeDog.sex}</p>
                    <p><span className="bold">Age:  </span>{activeDog.age}</p>
                    <p><span className="bold">Owner:  </span>{activeDog.owner.name} {activeDog.owner.lastName}</p>
                    <p><span className="bold">Present: </span>{(activeDog.present ? 'Yes' : 'No')}</p>
                </div>
            </div>
            
        </section>
    )
}

export default Info;
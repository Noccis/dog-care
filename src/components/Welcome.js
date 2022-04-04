import { Link } from 'react-router-dom';
import dogHeader from '../images/dogsplayingheader2.jpg';
import '../styling/welcome.css'

const Welcome = () => {
    return (
        <section>
            <img src={dogHeader} alt="Cute dogs playing" className='header-image'></img>
            <h1>Welcome to Doggy daycare</h1>
            <div className='welcome-information'>
            <p>"Quote from happy owner"</p>
            <p>Here you can see some very important information about our dogcare that is written in a easy and funny way. So good, yeah!</p>
            </div>
            

        </section>
    )
}

export default Welcome;
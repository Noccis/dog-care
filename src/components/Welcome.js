import { Link } from 'react-router-dom';
import dogHeader from '../images/dogsplayingheader.jpg';
import '../styling/welcome.css'

import walkerImage from '../images/dogwalker.jpeg'

const Welcome = () => {
    return (
        <section>
            <div className='header-image-container'>
                <img src={dogHeader} alt="Cute dogs playing" className='header-image'></img>
                <div className='quote-container'>
                    <p className='slogan'>"Sometimes my beloved Pixma don't want to go home, <br /> 
                     I take that as a good sign."<br/>
                    - Happy dog owner</p>
                </div>
            </div>
            
            <div className='welcome-information'>
            <img src={walkerImage}/>
            <p><h1>Welcome to Doggy daycare.</h1>Here you can see some very important information about our dogcare that is written in a easy and funny way. So good, yeah!</p>
            </div>
            

        </section>
    )
}

export default Welcome;
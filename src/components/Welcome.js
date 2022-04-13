import { Link } from 'react-router-dom';
import dogHeader from '../images/dogsplayingheader.jpg';
import '../styling/welcome.css'

import walkerImage from '../images/dogwalker.jpeg'

// Simple welcome page with basic information
const Welcome = () => {

    return (
        <section>
            <div className='header-image-container'>
                <img src={dogHeader} alt="Cute dogs playing" className='header-image'></img>
                <div className='quote-container'>
                    <p className='slogan'>"Sometimes my beloved Alice don't want to go home, <br /> 
                     I take that as a good sign."<br/>
                    - Happy dog owner</p>
                </div>
            </div>
            
            <div className='welcome-information'>
                <img src={walkerImage}/>
                <div className='welcome-text'>
                    <h1>Welcome to Doggy daycare.</h1>
                    <p>When you leave your dog with us you can be sure that you get the best care for your best friend<br /> 
                    Not only do we love dogs, we have 2 educated dog trainers to ensure that every day contains not only long walks but also mental training so that you can relax when you get home from a long day of work.
                    More time for snuggles with your dog!<br />
                    We have big open spaces indoor where we divide our pack into smaller groups so that they also get a chance to relax.<br />
                    <br />
                    Outside we have access to a large fenced garden where the dogs can get some extra outdoor activity. This is also where we train your dog if you would choose one of our extra courses.</p>
                </div>
                
            </div>
            <aside className='quotes'>
                <div className='quote'>
                    <img src="https://images.dog.ceo/breeds/greyhound-italian/n02091032_907.jpg"/>
                    <p>"Ludde can be quite picky with who he trusts but after just a few days he was running to the daycare happy to meet his new friends.<br /> I can really recommend Doggy Daycare!"</p>
                </div>
                <div className='quote'>
                <img src="https://images.dog.ceo/breeds/boxer/n02108089_5266.jpg" />
                    <p>"It is comforting to know that Rambo gets to activate his brain when we are at work so that we can just cuddle in the sopha when we get home.<br /> Before Doggy Daycare we had to activate him for at least an hour after work so that he wouldn't climb the walls."</p>
                </div>
            </aside>
            
        </section>
    )
}

export default Welcome;
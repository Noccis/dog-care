import { Link } from "react-router-dom";
import '../styling/register.css';
import dogHeader from '../images/dogsplayingheader.jpg';

// Component that shows all the dogs in the list and lets user click on a dog for more information
const Register = ({dogList, showInfo}) => {

    let listOfDogs = null;
    
    /* If the list is not empty, we map all the dogs and create a small info div with image and name */
    if(dogList != null) {

      listOfDogs = dogList.map(dog => (

          <div key={dog.name} className={"dog" + (dog.present ? ' bg-white' : ' bg-grey')} onClick={() => showInfo(dog)}>
                          
             <Link to={"/info"} id="link-container">
                <img src={dog.img} alt="Picture of a dog" className="dog-img" />  
                <p className="dog-name">{dog.name}</p>
             </Link>             
          </div>   
        ))     
    }

    return (
        <section className="register">
          <div className='header-image-container'>
            <img src={dogHeader} className="small-header-image"/>
            <p className="page-info"><span>The pack</span> - click on a dog for more info</p>
          </div>
            <section className="dog-list">
                {listOfDogs}
            </section>
            
        </section>
    )
}

export default Register;
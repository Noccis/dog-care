import { useState } from "react";
import { Link } from "react-router-dom";
import '../styling/register.css';
import dogHeader from '../images/dogsplayingheader.jpg';

const Register = ({dogList, showInfo, dodo}) => {

  //  console.log(dogList)

    let listOfDogs = null;

    let classbg = ""
    
    if(dogList != null) {

      listOfDogs = dogList.map(dog => (

          <div key={dog.name} className={"dog" + (dog.present ? ' bg-white' : ' bg-grey')} onClick={() => showInfo(dog)}>
             
             
             <Link to={"/info"} id="link-container">
                {/* <button onClick={() => showInfo(dog)}>Show info</button> */}
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
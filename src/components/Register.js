import { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({dogList, showInfo, dodo}) => {

  //  console.log(dogList)

    let listOfDogs = null;

    
    if(dogList != null) {

      listOfDogs = dogList.map(dog => (

          <div key={dog.name} className="dog">
             
             <img src={dog.img} alt="Picture of a dog" />  
             <p>{dog.name}</p>
             <Link to={"/info"}>
                <button onClick={() => showInfo(dog)}>Set Dog</button>
             </Link>
             
          </div>   
        ))

      //  console.log('REGISTER, dogList is not null!' + listOfDogs)
    }

    return (
        <section className="register">
            <h2>List of our dogs</h2>
            <button onClick={() => {
                console.log(dodo);
            }}>Print Dog</button>
            <section className="dog-list">
                {listOfDogs}
            </section>
            
        </section>
    )
}

export default Register;
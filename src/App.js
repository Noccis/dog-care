
import './App.css';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Info from './components/Info';
import { useEffect, useState } from 'react';
// import DogRegisterList from './components/DogRegisterList';

function App() {
 

  // const listOfDogs = getDogRegisterFromApi();

  // Controlling what shows under header
  const WELCOME = 'welcome', REGISTER = 'register', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [dogList, setDogList] = useState(null);
  let content = null
  
  switch(currentScreen) {
    case REGISTER:
      content = <Register />
      break;

    case INFO:
      content = <Info />

    default:
      content = <Welcome /> 
      
  }

   useEffect(() => {getData()}, [])

  // Function to recieve JSON list from API
  async function getData() {
    const dogRegisterAPI = 'https://api.jsonbin.io/b/623dc40406182767437fb28d';

    const respons = await fetch(dogRegisterAPI);
    console.log("Fetch succesful");

    const data = await respons.json();

    setDogList(data);
 //   console.log("Data converted to json:")
  // console.log(data);
    
  }

 // const listOfDogs = getData();
   

  return (
    <div className="App">
      <header className="App-header">
        <h1>Doggy Daycare</h1>
      </header>
      {content}
      <List doglist={dogList} /> 

    </div>
  );
}

const List = ({doglist}) => {

  let nameList = null;
  // console.log(doglist);
  if(doglist != null) {
    nameList = doglist.map(dog => (
      <p>{dog.name}</p>
    ))
  }
  
  return(
    
    <div>
     {nameList}
    </div>

  )
} 

export default App;

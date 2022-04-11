
import './App.css';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Info from './components/Info';
import { useEffect, useState } from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import dogoLogo from './images/doggylogo.png';
import DogRegisterList from './components/DogRegisterList';
import Join from './components/Join';

function App() {
 
  // List of dogs that will update when the fetch is done
  const [dogList, setDogList] = useState(null);

  // Dog object for showing detailed info about a dog in the Info component
  const [activeDog, setActiveDog] = useState(null);


  // Get the API data when webpage starts
  // useEffect(() => {getData()}, [])
  useEffect(() => {DogRegisterList(setDogList)}, [])
  


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
  
  console.log("Version 1.2");

  return (
    <div className="App">
      <header className="App-header">
        <img src={dogoLogo} alt="Dog Logo" />
        <div className='main-link-container'>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
          <Link to={"/register"}>
            <button>Meet the pack</button>
          </Link>
          <Link to={"/join"}>
            <button>Join us</button>
          </Link>
        </div>
      </header>
      
        <Routes>
          <Route exact path='/' element={
                <Welcome />
          } />
          <Route path='/register' element={
            <Register dogList={dogList} showInfo={setActiveDog} dodo={activeDog} />
          } />
          <Route path='/info' element={
            <Info activeDog={activeDog} />
          } />
          <Route path='/join' element={
            <Join />
          } />
        </Routes>
      
    </div>
  );
}

export default App;
// background-size: cover;
// import '../../styles/welcome.css'
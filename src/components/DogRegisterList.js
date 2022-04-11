
// Api for all the dogs attending this daycare
  
async function DogRegisterList(setDogList) {

    console.log("Function running");
    const dogRegisterAPI = 'https://api.jsonbin.io/b/623dc40406182767437fb28d';

    const respons = await fetch(dogRegisterAPI);
    console.log("EXTERNAL Fetch succesful");

    const data = await respons.json();

    await setDogList(data);
    console.log(data);

}

export default DogRegisterList; 
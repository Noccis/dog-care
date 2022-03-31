/* const DogRegisterList = () => {

// Api for all the dogs attending this daycare
  

  async function getData() {
    const dogRegisterAPI = 'https://api.jsonbin.io/b/623dc40406182767437fb28d';

    const respons = await fetch(dogRegisterAPI);
    console.log("Fetch succesful");

    const data = await respons.json();
 //   console.log("Data converted to json:")

  // console.log(data);
    return data;

  }

  const list = getData();

  return list;

    

}

export default DogRegisterList; */
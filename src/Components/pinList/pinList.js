import PinCard from "../pinCard/pinCard";
import "./pinList.css";
import {useState, useEffect} from "react";


const PinList = () => {
console.log("rendering pinList")
const url = "http://localhost:5000/pins";
const [pins, setPins] = useState([]);
const [body, setBody] = useState({
  name: "", 
  urlImg: "",
  description: "",
  })


useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => setPins(json))
    .catch((err) => console.log(err));
}, []);


const createPin = (event) => {
  event.preventDefault()
  fetch("http://localhost:5000/pins", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then((json) => setPins(json))
  .catch((err) => console.log(err));
};

return (
  <div>
    <p className='pinsTitle'>Pins</p>
    <div className="pinListContainer">
      {pins.map((pin) => (
        <PinCard pin={pin} key={pin.id} />
      ))}
    </div>
    
    <form className='newPinForm'>
      <input placeholder='Pin Name' onChange={(event) => setBody({...body, name:event.target.value})}></input>
      <input placeholder='Image Link' onChange={(event) => setBody({...body, urlImg:event.target.value})}></input>
      <button onClick={(event) => createPin(event)}>Create</button>
    </form>

  </div>
);
};

export default PinList;
import { Carousel } from 'react-bootstrap';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './style.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [insiderActivity, setinsiderActivity] = useState([])
  
  //call of insider activity
  useEffect(()=>{
  axios.get(`https://kidozanges.herokuapp.com/api/articles`)
  .then((response) => {
      setinsiderActivity(response.data)
      
  })
  .catch((error) => {
    console.error(error)
  })
},[])
console.log(insiderActivity)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="bazooka">
    
  {insiderActivity.map((item,index) => (
  <Carousel.Item key={index}>
    
      <h3 className="bazooka__title">{item.title}</h3>
      <p className="bazooka__description">{item.description}</p>
      <p className="bazooka__nickname">{item.nickname}</p>
    
  </Carousel.Item>
  ))}
</Carousel>
  )
  }

export default ControlledCarousel;
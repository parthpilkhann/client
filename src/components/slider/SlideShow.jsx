import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./slideShow.scss"
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

const imgData = ["https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4595538/pexels-photo-4595538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3998071/pexels-photo-3998071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
]


const Slider = () => {

  const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIndex((prevIndex) =>         // here prevState is used bc for react to access the state it has to complete the render cycle but here we can be just overriding the prev command and stopping the setting of state midway. read full-- https://ogzhanolguncu.com/blog/how-does-prevstate-works-under-the-hood ...
  //       prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
  //     )
  //   }, 2500)

  //   return () => { }
  // }, [index])

  const handlePrev = () => {
    setIndex((prevIndex) => (
      prevIndex === 0 ? imgData.length - 1 : prevIndex - 1
    ))
  }
  const handleNext = () => {
    setIndex((prevIndex) => (
      prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
    ))
  }


  return (
    <>
      <div className='slideShow' >
        <div className="slideShowSlider"style={{ transform: `translate3d(${-index * 100}%,0,0)` }} >
          {imgData.map((img, i) => (
            <img className='slide' key={i} src={img} alt="not found" />
          ))}
        </div>
        <div className="icons">
          <div className="icon" onClick={handlePrev} >
            <WestIcon />
          </div>
          <div className="icon" onClick={handleNext} >
            <EastIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider



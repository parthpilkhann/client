import React from 'react'
import Card from '../card/Card'
import "./ftProducts.scss"


const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/4295855/pexels-photo-4295855.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        img2: "https://images.pexels.com/photos/4295851/pexels-photo-4295851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Long Sleeve T-shirt",
        isNew: true,
        oldPrice: 600,
        price: 400
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/5747275/pexels-photo-5747275.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        img2: "https://images.pexels.com/photos/5747281/pexels-photo-5747281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Saree",
        isNew: true,
        oldPrice: 670,
        price: 560
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/4294849/pexels-photo-4294849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        img2: "https://images.pexels.com/photos/4294850/pexels-photo-4294850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Sweatshirt",
        isNew: false,
        oldPrice: 300,
        price: 250
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/4295831/pexels-photo-4295831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        title: "Kurti",
        isNew: true,
        oldPrice: 800,
        price: 500
    }

]

const FtProducts = ({ type }) => {
    return (
        <div className='ftProducts'>
            <div className="ftTop">
                <h1>{type}</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus adipisci dolor minima obcaecati amet nulla laborum, sit reprehenderit aperiam velit!</p>
            </div>
            <div className="cards">
                {data.map((item) => <Card item={item} key={item.id} />)}

            </div>
        </div>
    )
}

export default FtProducts

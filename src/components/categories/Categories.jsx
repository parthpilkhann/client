import React from 'react'
import "./categories.scss"

const Categories = () => {
    return (
        <div className='categories'>
            <div className="men">
                <img className='image' src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="middle">
                    <button>Men</button>
                </div>
            </div>
            <div className="women">
                <img className="women" src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg" alt="" />
                <div className="middle">
                    <button className='womenBtn' >Women</button>
                </div>
            </div>
            <div className="kids">
                <img className="kids" src="https://images.pexels.com/photos/7671272/pexels-photo-7671272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="middle">
                    <button>Men</button>
                </div>
            </div>
            <div className="fresh">
                <img className="fresh" src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="middle">
                    <button>Men</button>
                </div>
            </div>
            <div className="bags">
                <img className="bags" src="https://images.pexels.com/photos/7951222/pexels-photo-7951222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="middle">
                    <button>Men</button>
                </div>
            </div>
            <div className="shoes">
                <img className="shoes" src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="middle">
                    <button>Men</button>
                </div>
            </div>
        </div>
    )
}

export default Categories

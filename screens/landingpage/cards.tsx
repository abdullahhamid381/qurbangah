import { carddata } from '@/data/data'
import React from 'react'
import '../scsss/cards.scss'

const Cards = () => {
  return (
    <div className='cards-parent'>
        <div className='card-flex'>
            {carddata.map((item) => {
                return (
                  <div className='card-item' >
                      <div className='image-container'>
                          <img src={item.img}  />
                          <div className='overlay'>
                          
                          </div>
                      </div>
                      <div className='detail'>
                          <h1>Our Dairy Farm</h1>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                          <button>View More</button>
                      </div>
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cards

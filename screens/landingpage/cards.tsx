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
                      <div>
                      <img src={item.img}  />
                      </div>
                      <div className='overlay'>
                        <h1>hello</h1>
                      </div>
<div className='detail'>
    <h1>Our Dairy Farm</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
  <div>
  <button>View More</button>
  </div>
</div>
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cards

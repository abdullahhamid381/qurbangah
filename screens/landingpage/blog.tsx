import React from 'react'
import '../scsss/blog.scss'
import Cards from './cards'
import { blogdata } from '@/data/data'
import { FaArrowRightLong } from "react-icons/fa6";
const blog = () => {
  return (
  <div className="blog-parent">
    <div className="background">
        <div className="width">
        <div className="title">
          <div>
            <div>
              <h1>Blogs</h1>
            </div>
            <div className="img">
              <img src="./images/divider.png" alt="" />
            </div>
          </div>
        </div>
        <div className='card-flex'>
            {blogdata.map((item) => {
                return (
                  <div className='card-item' >
                      <div className='image-container'>
                          <img src={item.img}  />
                          <div className='overlay'>
                          
                          </div>
                      </div>
                      <div className='detail'>
                      <span>June 14 2024</span>
                          <h1>Our Dairy Farm</h1>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
                          {/* <button>View More</button> */}
                      </div>
                  </div>
                )
            })}
        </div>
        <div className="read-more">
            <button>Read All Posts <FaArrowRightLong />
            </button>
        </div>
        </div>
    </div>
  </div>
  )
}

export default blog
import React from "react";
import "../scsss/about.scss";
const about = () => {
  return (
    <div className="about-main-parent">
      <div className="about-parent">
        <div className="width">
          <div className="main-title">
            <div>
              <div>
                <h1>About Us</h1>
              </div>
              <div>
                <img src="./images/divider.png" alt="" />
              </div>
            </div>
          </div>

          <div className="detail">
            <div className="img">
              <img src="./images/about.jpg" alt="" />
            </div>
            <div className="para">
              <h1>Our Vision</h1>
             
              <p>Qurbangah will put an affort to provide income and oppurtunity to women farmers focus in south punjab. At the start of this adventure it might seems like a drop in the ocean but our goal is to contribute in poverty alliviation.  
                Our mission is to create a seamless and meaningful experience
                for individuals looking to fulfill their religious duties during
                Eid ul Adha. By offering a user-friendly platform, we make it
                easy for you to purchase animals for sacrifice, ensuring that
                your contributions are used ethically and transparently to
                benefit those in need.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

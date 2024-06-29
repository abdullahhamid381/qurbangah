import React from "react";
import "../scsss/footer.scss";
import { footerdata } from "@/data/data";
const footer = () => {
  return (
    <div className="footer-parent">
      <div className="background">
        <div className="width">
          <div className="new-letter">
            <div>
              <h1>Newsletter</h1>
              <p>Short description gose here</p>
            </div>
            <div className="field">
              <input type="email" placeholder="Enter your email" />
              <input type="button" value={"Subscribe"} className="button" />
            </div>
          </div>

          <div className="items">
            {footerdata.map((item) => {
              return (
                <div>
                  <h1>{item.title}</h1>
                  <div className="list">
                    <span>{item.list1}</span>
                    <span>{item.list2}</span>
                    <span>{item.list3}</span>
                    <span>{item.list4}</span>
                    <span>{item.list5}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="copyright">
            <p>Copyright © Qurbangah. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

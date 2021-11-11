import React from "react";
import "./portfolioItem.scss";

export default function PortfolioItem() {
  return (
    <div className="project">
      <div className="image">
        <img src="/assets/hrf-asylum.png" alt="" />
      </div>
      <div className="description">
        <div className="title">
          <h3>Human Rights First: Asylum</h3>
        </div>
        <div className="summary">
          {" "}
          <p>
            Human Rights First is an independent advocacy and action
            organization that challenges America to live up to its ideals. They
            believe American leadership is essential in the global struggle for
            human rights, so they press the U.S. government and private
            companies to respect human rights and the rule of law. When they
            fail, they step in to demand reform, accountability and justice.
            Around the world, they work where they can best harness American
            influence to secure core freedoms.
          </p>
          <br></br>
          <p>
              
          </p>
        </div>
      </div>
    </div>
  );
}

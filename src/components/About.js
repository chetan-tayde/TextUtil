import React from 'react'

export const About = () => {
    return (
        <div className="container">
            <h2 className="my-3 mx-2">About Us</h2>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About us
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
    
      <p>This is our text util app which is use for basic text operations</p>
      </div>
    </div>
  </div>
  
</div>
        </div>
    )
}

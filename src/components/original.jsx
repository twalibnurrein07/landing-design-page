import React from "react";
import NAVBAR from "./NAVBAR";

function Toprow(){
    return(
        <div className="col-lg-7 sm-12">
         
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
   <img src="./images/desktop-image-hero-1.jpg" className="desktop-image" alt="desktop.image"/>
   <NAVBAR/>
   </div>
   <div class="carousel-item">
   <img src="./images/desktop-image-hero-2.jpg" className="desktop-image" alt="desktop.image"/>
   <NAVBAR/>
   </div>
   <div class="carousel-item">
   <img src="./images/desktop-image-hero-3.jpg" className="desktop-image" alt="desktop.image"/>
   <NAVBAR/>
   </div>
 </div>
</div>
      </div>
      <div className="col-lg-5 sm-12">
      <div className="content">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
   <div class="carousel-item active">
   <h2>Discover innovative ways to decorate</h2>
        <p>We provide unmatched quality,comfort and style for property owners across the country.Our experts
        combine form and function in bringing your vision to life.Create a room,in your own style with our collection 
        and make your property a reflection of you and what you love</p>
        <p>SHOP NOW</p>
   </div>
   <div class="carousel-item">
     <h2>We are available all across the globe</h2>
     <p>With stores all over the world,it's easy for you to find furniture for your home or place
     of business.Locally,we're in the most major cities throughout the country.Find the branch nearest you using our store locator.
     Any questions?Don't hesitate to contact us today.</p>
     <p>SHOP NOW</p>
   </div>
   <div class="carousel-item">
   <h2>Manufactured with the best materials</h2>
     <p>Our modern furniture store provide a high level of quality.Our company has invested in advanced 
     technology to ensure that every product is made as perfect and as consistent as possible.With three decades
     of experience in this industyr,we understand what customers want for their home and office</p>
     <p>SHOP NOW</p>
   </div>
   </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
  </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
 <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
        </div>
      </div>
       
        <div className="carouselButton">
       {/* this is an empty div */}
      </div>
      </div>
      
    )
}

export default Toprow;
import React from "react";
import NAVBAR from "./components/NAVBAR";
import BlackDiv from "./components/BlackDiv";
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';

function App() {
  return (
   <div className="container-fluid">
     
       <div className="row">
       

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="./images/desktop-image-hero-1.jpg" className="desktop-image" alt="desktop.image"/>
    <NAVBAR/>
    <div className="content discover">
    <h2>Discover innovative ways to decorate</h2>
         <p>We provide unmatched quality,comfort and style for property owners across the country.Our experts
         combine form and function in bringing your vision to life.Create a room,in your own style with our collection 
         and make your property a reflection of you and what you love</p>
         <h6>SHOP NOW <span><ArrowRightAltSharpIcon/></span></h6>
         <BlackDiv/>
         </div>
         
    </div>
    
    <div class="carousel-item">
    <img src="./images/desktop-image-hero-2.jpg" className="desktop-image" alt="desktop.image"/>
    <NAVBAR/>
    <div className="content available">
    <h2>We are available all across the globe</h2>
      <p>With stores all over the world,it's easy for you to find furniture for your home or place
      of business.Locally,we're in the most major cities throughout the country.Find the branch nearest you using our store locator.
      Any questions?Don't hesitate to contact us today.</p>
      <h6>SHOP NOW <span><ArrowRightAltSharpIcon/></span></h6>
      <BlackDiv/>
    </div>
    
    </div>
    
    <div class="carousel-item">
    <img src="./images/desktop-image-hero-3.jpg" className="desktop-image" alt="desktop.image"/>
    <NAVBAR/>
    <div className="content manufacture">
    <h2>Manufactured with the best materials</h2>
      <p>Our modern furniture store provide a high level of quality.Our company has invested in advanced 
      technology to ensure that every product is made as perfect and as consistent as possible.With three decades
      of experience in this industyr,we understand what customers want for their home and office</p>
      <h6>SHOP NOW <span><ArrowRightAltSharpIcon/></span></h6>
      <BlackDiv/>
    </div>
    
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
       <div className="row">
       <div className="col-lg-3 sm-12">
       <img src="./images/image-about-dark.jpg" className="dark-image" alt="dark.image"/>
       </div>
       <div className="col-lg-6 sm-12">
         <h4>About our furniture</h4>
         <p>Our multifunctional collection blends design and function to suit your individual taste.Make each room unique,or pick a cohesive theme that 
         best express your interests and what inspires you.Find the furniture pieces you need,
         from traditional to contemporary styles or anything in between.Product specialist
         are available to help you create your dream space</p>
       </div>
       <div className="col-lg-3 sm-12">
       <img src="./images/image-about-light.jpg" className="light-image" alt="light.image"/>
       </div>
       </div>
   </div>
  )
}

export default App;

import React from 'react'
import "../style.css"
import mybg from '../Images/mybg.jpg'
// import {link} from 'react-router-dom'
import {Link} from 'react-router-dom'
// import crud from '../Images/CRUD.png'
const MernStack = () => {
    return (<>
     <head>
    <title>Responsive Website Landing Page Design</title>
  
    </head> 
    
  <body>

    <section>
      <header>
      
      </header>
      <div class="content">
        <div class="info">
        <h2>Welcome to Issues<br></br></h2>
        <img style ={{backgroundSize: "100%",width: "800px",height:"600px",background: "linear-gradient(#BF3325, #9198e5);"}}src={mybg} alt={"mybg"}/>

          {/* <a href="#" class="info-btn">More Info</a> */}
        </div>
      </div>
      <div class="media-icons">
        {/* <a href="#"><i class="fab fa-facebook-f"></i></a> */}
        {/* <a href="#"><i class="fab fa-twitter"></i></a> */}
        {/* <a href="#"><i class="fab fa-instagram"></i></a> */}
      </div>
    </section>

  </body>

    
        </>
    )
}

export default MernStack

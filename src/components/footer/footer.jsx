
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="before-footercol"> 
        <div className="before-img">
        <img src="/bg-simplify-section-desktop.svg" />
        </div>

        <div className="before-txt">
      <div className="before-txt2">
      <h2>Simplify how your team works today.</h2>
      <button>Get Started</button>
      </div>
      </div>
      </div>



      <div className="footer">
        <div className="icons">
            <img src="/logo.svg" /> 
            <div className="smallicons">
                <img src="/icon-facebook.svg"/>
                <img src="/icon-youtube.svg"/>
                <img src="/icon-twitter.svg"/>
                <img src="/icon-pinterest.svg"/>
                <img src="/icon-instagram.svg"/>
            </div>
        </div>

    <div className="footer-nav">

    <div>
           <li>Home</li> 
           <li>Pricing</li> 
           <li>Products</li> 
           <li>About Us</li> 
        </div>

        <div>
           <li>Careers</li> 
           <li>Community</li> 
           <li>Privacy Policy</li> 
        </div>

    </div>
        

        <div className="inbox">
           <div className="inbox-inbox">
           <input placeholder="Updates in your inbox…"/>
           <button>Go</button>
           </div>

           <span> Copyright 2020. All Rights Reserved</span>

        </div>


      </div>

      
    </div>
  )
}

export default Footer

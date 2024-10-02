
import './testimonial.css'



const Testimonial = () => {
  return (
    <div className='parent-testimonial'>
     <h1> What they’ve said</h1>
    <div className="testimonial-container">
       
        <div className="user">
        <img src="public\images\avatar-anisha.png" alt="user1" />
        <h4>  Anisha Li</h4>
            <p> “Manage has supercharged our team’s workflow. 
        The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
        </div>

        <div className="user">
            <img src="public\images\avatar-ali.png" alt="user1" />
            <h4>    Ali Bravo  </h4>
            <p>  “We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”</p>
        </div>


        <div className="user">
            <img src="public\images\avatar-richard.png" alt="user1" />
            <h4>    Richard Watts
            </h4>
            <p> “Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”
</p>
        </div>


        <div className="user">
            <img src="public\images\avatar-shanai.png" alt="user1" />
            <h4>     Shanai Gough
            </h4>
            <p>  “Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”
</p>
        </div>

      </div>
      <button>Get Started</button>
    
    </div>
  )
}

export default Testimonial

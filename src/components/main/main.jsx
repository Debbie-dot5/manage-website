import "./main.css"


const Main = () => {
    return(
        <>
        <div className="main-container">
            <div className="txtcont">
                <h2> What’s different about Manage?</h2>
                <p> Manage provides all the functionality your team needs, without 
      the complexity. Our software is tailor-made for modern digital 
      product teams. </p>
            </div>



            <div className="txtcont2">
                <div className="col1">
                    <div className="subcont">
                    <button>01</button>
                    <h4>  Track company-wide progress
                    </h4>
                    </div>
                    <p>See how your day-to-day tasks fit into the wider vision. Go from 
      tracking progress at the milestone level all the way done to the 
      smallest of details. Never lose sight of the bigger picture again.
    </p>
                </div>
                <div className="col1">
                    <div className="subcont">
                    <button>02</button>
                    <h4>    Advanced built-in reports
                    </h4>
                    </div>
                    <p> Set internal delivery estimates and track progress toward company 
      goals. Our customisable dashboard helps you build out the reports 
      you need to keep key stakeholders informed.
    </p>
                </div>
    
                <div className="col1">
                <div className="subcont">
                <button>03</button>
                    <h4>    Everything you need in one place
                    </h4>
                </div>
                    <p>Stop jumping from one service to another to communicate, store files, 
      track tasks and share documents. Manage offers an all-in-one team 
      productivity solution.
    </p>
                </div>
    
            </div>
        </div>
        
        </>
    )
   
}

export default Main
import './hero.css';
//mport illustrationIntro from './assets/images/illustration-intro.svg';


  
const Hero = () => {
    return(
        <div className='hero-container'>
            <div className='txtcont'>
                <h1>Bring everyone together to build better products.</h1>
                <p> Manage makes it simple for software teams to plan day-to-day 
                tasks while keeping the larger team goals in view.</p>
                <button>Get started</button>
            </div>

            <div className='imgcont'>
                <img src= "public\images\illustration-intro.svg"/>
            </div>
        </div>
    )
}

export default Hero
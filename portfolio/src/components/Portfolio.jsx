import blogss from '../assets/blogss.png';
import gamefoss from '../assets/gamefoss.png';
import mealhelper from '../assets/mealhelper.png';
import portfolioss from '../assets/portfolioss.png';
import readmegenss from '../assets/readmegenss.png';
import vehiclegen from '../assets/vehiclegen.png';

const Portfolio = () => {
  return ( 
    <div className='box'>
      <h2>Portfolio</h2>
      <div className='card-box'>
        <div className='row'>
          <div className='card'>

          </div>
          <div className='card'>
            <h1>Meal Helper</h1>
            <img className='cardimg' src={mealhelper} alt='Photo of Mealhelper Website'></img>
          </div>
          <div className='card'>
            <h1>Gamefo</h1>
            <img className='cardimg' src={gamefoss} alt='Photo of Gamefo Website'></img>
          </div>
          <div className='card'>
            <h1>Read-Me Generator</h1>
            <img className='cardimg' src={readmegenss} alt='Photo of Read-Me Generator result'></img>
          </div>
        </div>
        <div className='row'>
          <div className='card'>
            <h1>Portfolio</h1>
            <img className='cardimg' src={portfolioss} alt='Photo of Older Portfolio Website'></img>
          </div>
          <div className='card'>
            <h1>My First Blog</h1>
            <img className='cardimg' src={blogss} alt='Photo of My First Blog Website'></img>
          </div>
          <div className='card'>
            <h1>Vehicle Builder</h1>
            <img className='cardimg' src={vehiclegen} alt='Photo of Vehicle Builder in use'></img>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Portfolio;
import './trandingcard.css'
import img08 from "../assets/img08.jpg";
import { Link } from 'react-router-dom';

const TrandingCard = () => {
  return (
 <div className="tranding_game">
         <img src={img08} className="round" />
            <div className="info">
               <span>Game</span>
              <h3>Arow Hunt</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Iste sit magnam inventore
                recusandae animi rem?
               </p>
             <div className="news_link">
                 <Link to="" className="round">
                 Download Now
               </Link>
               </div>
            </div>
         </div>
  )
}

export default TrandingCard

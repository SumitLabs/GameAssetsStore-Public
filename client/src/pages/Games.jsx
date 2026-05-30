import './games.css'
import { LuGamepad2 } from "react-icons/lu";
const Games = () => {
  return (
    <div className="container">
      <section className="mt-24 mb-24 text_center games_header">
        <p className='flex_box justify_center'> <LuGamepad2 />  Choose your way to pay</p>
        <h2>Pay Instantly or <span>Download</span></h2>
        <p>Enjoy gaming. Play online instantly without any downloads or download your favorite games to play anytime without having internet. </p>
      </section>

      <section className='mode_selection flex_box justify_evenly'>
        <div className="mode_container flex_box flex_col align_center">
          <h2>Download Game</h2>
          <p>Download and install your favorite games to play
            offline anytime , anywhere.
          </p>
          <div className="flex_box">
            <div className="flex_box">
              <div className="icone"></div>
              <div className="features">
                <p>Play Offline</p>
                <p>No internet needed</p>
              </div>
            </div>
            <div className="flex_box">
              <div className="icone"></div>
              <div className="features">
                <p>High Quality</p>
                <p>Best Graphics</p>
              </div>
            </div>
            <div className="flex_box">
              <div className="icone"></div>
              <div className="features">
                <p>Regular Updates</p>
                <p>New Content</p>
              </div>
            </div>

          </div>
          <button>Browse Download Game</button>
        </div>

        <div className="mode_container flex_box flex_col align_center">
          <h2>Play Online Games</h2>
          <p>Jump into action instantly in your browser without any downloads.
          </p>
          <div className="flex_box">
            <div className="flex_box">
              <div className="icone"></div>
              <div className="features">
                <p>Instant play</p>
                <p>Click & Play</p>
              </div>
            </div>
            <div className="flex_box">
              <div className="icone"></div>
              <div className="features">
                <p>Any Device</p>
                <p>Play Anywhere</p>
              </div>
            </div>
            <div className="flex_box">
              <div className="icone"></div>
              <div className="features">
                <p>Multiplayer</p>
                <p>Play with Friends</p>
              </div>
            </div>

          </div>
          <button>Play Online Now</button>
        </div>

      
      </section>

    </div>
  )
}

export default Games

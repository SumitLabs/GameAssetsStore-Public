import "./banner.css"
// import bannerImg from "../assets/test.jpg"
const Banner = () => {
  
  return (
   
    <div className="banner_section flex_box align_center justify_center ">
      <div className="banner round flex_box align_center justify_between ">
       <div className="ad flex_box justify_center flex_col">
          <h3>Publisher of the week</h3>
          <p>Save 50% on assets get a free gift in this week's Publisher Sale</p>
          <p className="publisher_auther">By FramaDev</p>
          <button className="btn">SHOP Now</button>
       </div>
       <div className="ad_r">
        {/* <img src={bannerImg} alt="" className="round"/> */}
       </div>
      </div>
    </div>

    
  )
}

export default Banner
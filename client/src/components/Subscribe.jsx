import './subscribe.css'

const Subscribe = () => {
  return (
   <div className="container">
  <div className="subscribe_section flex_box align_center justify_around">
    <div className="subscribe_headning">
    <h3>Subscribe today to get the leatest instights notification</h3>
    </div>
    <div className="subscribe_letter">
   <form action="" method="POST">
    <input type="email" name="" id="" placeholder='Enter Your Mail ID...'/>
    <input type="submit"  className="btn"value="Subcribe Now" />
   </form>
    </div>
  </div>
   </div>
  )
}

export default Subscribe
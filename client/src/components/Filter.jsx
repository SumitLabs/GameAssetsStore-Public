import "./filter.css";
import { FaStar } from "react-icons/fa";

const Filter = () => {
  return (
    <aside className="filter_panel round p_16">

      {/* Categories */}
      <div className="filter_block">
        <div className="filter_title">
          <h4>Categories</h4>
         
        </div>

        <div className="filter_options flex_box flex_col">
          {["All","Characters","Environments","GUI","Textures & Materials"].map((item) => (
            <label key={item} className="check_row">
              <input type="checkbox" />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="filter_block">
        <div className="filter_title">
          <h4>Price</h4>
          
        </div>

        <input type="range" min="0" max="100" className="w_full" />

        <div className="flex_box justify_between text_sm mt_8">
          <span>$10</span>
          <span>$10–$75</span>
        </div>
      </div>

      {/* Rating */}
      <div className="filter_block">
        <div className="filter_title ">
          <h4>Rating</h4>
        
        </div>

        {[5,4,3,2,1].map((r,i)=>(
          <div key={i} className="rating_row">
            {[...Array(5)].map((_,s)=>(
              <FaStar key={s} className={s<r ? "star_on":"star_off"} />
            ))}
            <span className="rating_count">(142)</span>
          </div>
        ))}
      </div>

      {/* Date */}
      <div className="filter_block">
        <div className="filter_title ">
          <h4>Date</h4>
          
        </div>

        {["Last 24 Hours","Last Week","Last Month","Last Year"].map((d)=>(
          <label key={d} className="check_row">
            <input type="checkbox"/>
            <span>{d}</span>
          </label>
        ))}
      </div>

      {/* Type */}
      <div className="filter_block">
        <div className="filter_title ">
          <h4>Type</h4>
          
        </div>

        {["Graphics","Animations","UI Elements","Backgrounds","Icons","Miscellaneous"].map((t)=>(
          <label key={t} className="check_row">
            <input type="checkbox"/>
            <span>{t}</span>
          </label>
        ))}
      </div>

    </aside>
  );
};

export default Filter;

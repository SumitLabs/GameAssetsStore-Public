import { useEffect, useState } from "react";
import "./review.css";
import avatar from "../assets/avatar.jpg";
import CountUp from "react-countup";
const reviews = [
  {
    name: "Deniel Smith",
    role: "Software Developer",
    rating: 4,
    text: "This digital agency completely transformed our online presence. Their expertise and creativity exceeded expectations.",
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    rating: 5,
    text: "Fantastic experience! The team delivered stunning design and flawless performance.",
  },
  {
    name: "Michael Brown",
    role: "Project Manager",
    rating: 5,
    text: "Professional, reliable, and highly skilled. Highly recommended for game studios.",
  },
];

const Review = () => {
  const counters = [{ value: 999, text: "Clients Rating" }];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % reviews.length),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex_box justify_evenly review_section align_center">
      <div className="card_stack">
        {reviews.map((item, i) => {
          const pos = (i - active + reviews.length) % reviews.length;
          return (
            <div key={i} className={`review_card pos_${pos}`}>
              <div className="card_header">
                <img src={avatar} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
                <div className="stars">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
              </div>
              <p className="review_text">{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="happy_client">
        {counters.map((item, index) => (
          <div className="clients" key={index}>
            <CountUp
              start={0}
              end={item.value}
              duration={3}
              delay={0.5}
              className="clients_number"
            />
            <p>{item.text}+</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

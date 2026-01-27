import "./counter.css";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    {
      value: 200,
      suffix: "+",
      label: "Years on the Market",
    },
    {
      value: 95,
      suffix: "+",
      label: "Highly Skilled Specialists",
    },
    {
      value: 1200,
      suffix: "+",
      label: "Games Completed",
      format: "K",
    },
    {
      value: 3500,
      suffix: "+",
      label: "Clients Recommend Us",
      format: "K",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // 🔥 run only once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="counter_section flex_box justify_center align_center"
    >
      {counters.map((item, index) => (
        <div
          className="counter_circle flex_box justify_center align_center"
          key={index}
        >
          <div className="counter_content">
            <span className="counter_number">
              {startCount && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={3}
                  separator=","
                  formattingFn={(value) =>
                    item.format === "K"
                      ? `${(value / 1000).toFixed(1)}K`
                      : value
                  }
                />
              )}
              {item.suffix}
            </span>
            <p className="counter_label">{item.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Counter;

import { useEffect, useState } from "react";
import "./loader.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = null;

    const duration = 1000; // 1 seconds total

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(percent));

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="loader_page">
      <div className="circle_wrapper">
        <div className="rotating_dots"></div>
        <div className="percentage">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
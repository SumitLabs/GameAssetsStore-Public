import { useEffect, useState } from "react";

const DelayedSuspense = ({ children, delay = 1000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return show ? children : null;
};

export default DelayedSuspense;
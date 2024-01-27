import { useEffect, useState } from "react";

const useScrollTrigger = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handelScrollTrigger = () => {
      if (window.scrollY > 0) {
        setTrigger(true);
      } else {
        setTrigger(false);
      }
    };

    window.addEventListener("scroll", handelScrollTrigger);

    return () => {
      window.removeEventListener("scroll", handelScrollTrigger);
    };
  }, []);

  return { trigger };
};

export { useScrollTrigger };

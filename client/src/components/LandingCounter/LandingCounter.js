import React from "react";
import { useEffect, useState } from "react";
export default function LandingCounter({ stopCounter }) {
  const [courseCounter, setCourseCounter] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter((prv) => prv + 1);
      return () => clearInterval(interval);
    }, 0.1);
    if (courseCounter === stopCounter) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [courseCounter]);
  return <span className='landing-status__count'>{courseCounter}</span>;
}

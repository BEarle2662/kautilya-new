import React, { useState, useEffect } from 'react';


const NumberCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const startCount = count;
    const endCount = end;

    const updateCount = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
      
        const progress = duration !== 0 ? Math.min((timestamp - startTimestamp) / duration, 1) : 1;
        const newCount = Math.floor(progress * (endCount - startCount) + startCount);
      
        // Check if newCount is NaN
        if (!isNaN(newCount)) {
          setCount(newCount);
        }
      
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

    requestAnimationFrame(updateCount);

    return () => {
      startTimestamp = null;
    };
  }, [count, end, duration]);

 
  return (
    
      <span className="counter">{count}</span>
    
  );
};

export default NumberCounter;
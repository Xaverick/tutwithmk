import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterComponent() {
  useEffect(() => {
    const startTypewriter = () => {
      new Typewriter('#typewriter', {
        strings: ['This is a typewriter effect!'],
        autoStart: true,
        delay: 2000, // Delay in milliseconds before starting
      });
    };

    setTimeout(startTypewriter, 2000); // Delay before starting typewriter
  }, []);

  return (
    <div id="typewriter">
      {/* The typewriter effect will be applied here */}
    </div>
  );
}

export default TypewriterComponent;
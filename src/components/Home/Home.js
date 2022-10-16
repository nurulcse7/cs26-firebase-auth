import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            `<h3>Hello I'm</h3>
            <h1>Nurul Islam</h1>
            <h2 className="text-light">Fullstack Web and Apps Developer</h2>`
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Home;

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
const HeadLine = () => {
    return (
        <div className='' style={{backgroundColor:'#010313'}} >
      <h4 className='text-xl   text-center py-4 font-extrabold  text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap '>
      <Typewriter
          words={['Welcome! We are providing a safe, secure, and life time guaranty for our clients. continue with Hello Bank.']}
          loop={100}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h4>
        </div>
    );
};

export default HeadLine;
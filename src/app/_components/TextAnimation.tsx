'use client';

import React, { useState, useEffect } from 'react';

const TextAnimation = () => {
  const [animatedText, setAnimatedText] = useState({
    text: '',
    animatedTextResult: '',
    completedAnimation: false,
    iterationValue: 0,
    speed: 50,
  });

  useEffect(() => {
    const updateTime = () => {
      const kosovoTimeZone = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Prague',
        timeStyle: 'medium',
        hourCycle: 'h24',
      });
      setAnimatedText((prevText) => ({
        ...prevText,
        text: `${kosovoTimeZone} (CET) - Kosovo, Prishtina`,
      }));
    };

    updateTime();
    setTimeout(() => {
      setAnimatedText((prevText) => ({
        ...prevText,
        completedAnimation: true,
      }));
    }, 2000);
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (animatedText.text.length === animatedText.animatedTextResult.length) return;

    const animateTypingText = () => {
      if (animatedText.iterationValue < animatedText.text.length) {
        setAnimatedText((prevText) => ({
          ...prevText,
          animatedTextResult: prevText.animatedTextResult + prevText.text.charAt(prevText.iterationValue),
          iterationValue: prevText.iterationValue + 1,
        }));
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(animateTypingText, animatedText.speed);

    return () => clearInterval(intervalId);
  }, [animatedText.text]);

  return (
    <>
      <p className='text-animation__time'>
        <span className='text-animation__time__date-location'>
          {animatedText.completedAnimation ? animatedText.text : animatedText.animatedTextResult}
        </span>
        <span className='text-animation__time__blinker'></span>
      </p>
    </>
  );
};

export default TextAnimation;

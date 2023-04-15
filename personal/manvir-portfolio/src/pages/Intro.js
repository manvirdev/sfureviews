import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const StyledComponent = styled(motion.div)`
  -webkit-text-size-adjust: 100%;
  color: #999;
  letter-spacing: 2px;
  font-size: 15px;
  line-height: 20px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  width: 90%;
  opacity: 1;
  min-height: 200px;
  margin-right: auto;
  margin-left: 10%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  align-items: flex-start;
  top: 20%;
`;

const SecondStyledComponent = styled(motion.div)`
  -webkit-text-size-adjust: 100%;
  -webkit-box-direction: normal;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;
  font-family: 'Playfair Display', sans-serif;
  color: #000;
  text-align: left;
  line-height: 43px;
  font-weight: 500;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  opacity: 1;
  transform-style: preserve-3d;
`;


const MyComponent = () => {
  return (
    <>
     <StyledComponent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
      INTRO
      <SecondStyledComponent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
      Hi, I'm Manvir Heer, a Software Developer based out of <br/> Vancouver, British Columbia.
    </SecondStyledComponent>
    </StyledComponent>
    </>
  );
};

export default MyComponent;

import { keyframes } from "styled-components";
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const clickEffect = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
`;

export const loading = keyframes`
  0% {
    transform:translateY(0px);
  }
  50% {
    transform:translateY(-20px);
  }
  100% {
    transform:translateY(0px); 
  } 
`;

export const rotate = keyframes`
  0% {
    transform:rotate(0deg);
  }  
  100% {
    transform:rotate(360deg); 
  } 
`;

export const slideDownToUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }  
  100% {
    opacity: 1;
    transform: translateY(0);
  } 
`;
export const slideUpToDown = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50%) translateY(-20px);
  }  
  100% {
    opacity: 1;
    transform: translateX(50%) translateY(0px);
  } 
`;

export const blink = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData)

interface CountdownProviderProps {
  children: ReactNode;
}

let countDownTimeout: NodeJS.Timeout;

export function  CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setIsHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  };

  function resetCountdown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setIsHasFinished(false);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time -1); 
      }, 1000)
    } else if (isActive && time === 0){
      setIsHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider 
      value={{ 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}>
      { children }
    </CountdownContext.Provider>
  )
}

// EXEMPLO DE CONTEXTO GLOBAL BASE

// import { createContext, useState, ReactNode } from 'react';

// interface CountdownContextData {

// }

// export const CountdownContext = createContext({} as CountdownContextData)

// interface CountdownProviderProps {
//   children: ReactNode;
// }

// export function  CountdownProvider({ children }: CountdownProviderProps) {


//   return (
//     <CountdownContext.Provider 
//       value={{ 

//       }}>
//       { children }
//     </CountdownContext.Provider>
//   )
// }
import { useState } from "react";

export const useConfetti = () => {
  const [confettiVisible, setConfettiVisible] = useState(false);

  const triggerConfetti = (duration = 3000) => {
    setConfettiVisible(true);
    setTimeout(() => {
      setConfettiVisible(false);
    }, duration);
  };

  return { confettiVisible, triggerConfetti };
};

export const triggerConfetti = (setConfettiVisible, duration = 3000) => {
  setConfettiVisible(true);
  setTimeout(() => {
    setConfettiVisible(false);
  }, duration);
};

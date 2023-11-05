const dayPass = (date) => {
  const today = new Date();
  const last = new Date(date);
  const timeDifference = today - last;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return days;
};

export default dayPass;

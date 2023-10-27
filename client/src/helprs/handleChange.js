const handleChange = (e, setter) => {
  const { name, value } = e.target;
  setter((pr) => {
    return {
      ...pr,
      [name]: value,
    };
  });
};

export default handleChange;

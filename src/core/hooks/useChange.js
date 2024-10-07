export const useChange = (setter) => (e) => {
  const { name, value } = e.target;
  setter((prev) => ({
    ...prev,
    [name]: value
  }));
};

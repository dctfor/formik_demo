
export const getPatientsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('patients')) || [];
};

export const savePatientsToLocalStorage = (patients) => {
  localStorage.setItem('patients', JSON.stringify(patients));
};
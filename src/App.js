import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import PatientForm from './PatientForm';

function App() {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  const addPatient = (patient) => {
    const updatedPatients = [...patients, patient];
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
  };

  const updatePatient = (updatedPatient) => {
    const updatedPatients = patients.map((patient, index) =>
      index === editingPatient.index ? updatedPatient : patient
    );
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
    setEditingPatient(null);
  };

  const deletePatient = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
  };

  const editPatient = (index) => {
    setEditingPatient({ ...patients[index], index });
  };

  return (
    <div className="container mt-5">
      <h1>Patient Form</h1>
      <PatientForm
        addPatient={addPatient}
        updatePatient={updatePatient}
        editingPatient={editingPatient}
      />
      <h2 className="mt-5">Patient List</h2>
      <ul className="list-group">
        {patients.map((patient, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {patient.name} - {patient.email} - {patient.age} - {patient.address}
            </span>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => editPatient(index)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => deletePatient(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

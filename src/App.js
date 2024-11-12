// Import necessary modules and components
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import { getPatientsFromLocalStorage, savePatientsToLocalStorage } from './utils/localStorage';
import { Button } from 'react-bootstrap';

function App() {
  // State variables to manage patients, editing patient, and modal visibility
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load patients from local storage when the component mounts
  useEffect(() => {
    const storedPatients = getPatientsFromLocalStorage();
    setPatients(storedPatients);
  }, []);

  // Function to add a new patient
  const addPatient = (patient) => {
    const updatedPatients = [...patients, patient];
    setPatients(updatedPatients);
    savePatientsToLocalStorage(updatedPatients);
  };

  // Function to update an existing patient
  const updatePatient = (updatedPatient) => {
    const updatedPatients = patients.map((patient, index) =>
      index === editingPatient.index ? updatedPatient : patient
    );
    setPatients(updatedPatients);
    savePatientsToLocalStorage(updatedPatients);
    setEditingPatient(null);
  };

  // Function to delete a patient
  const deletePatient = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
    savePatientsToLocalStorage(updatedPatients);
  };

  // Function to set the patient to be edited
  const editPatient = (index) => {
    setEditingPatient({ ...patients[index], index });
    setShowModal(true);
  };

  // Function to cancel editing
  const cancelEdit = () => {
    setEditingPatient(null);
  };

  // Functions to handle modal visibility
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Patient Form</h1>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={handleShow}>
          Add Patient
        </Button>
      </div>
      <PatientForm
        show={showModal}
        handleClose={handleClose}
        addPatient={addPatient}
        updatePatient={updatePatient}
        editingPatient={editingPatient}
        cancelEdit={cancelEdit}
      />
      <h2 className="mt-5">Patient List</h2>
      <PatientList
        patients={patients}
        editPatient={editPatient}
        deletePatient={deletePatient}
      />
    </div>
  );
}

export default App;

import React from 'react';

// PatientList component to display a list of patients
function PatientList({ patients, editPatient, deletePatient }) {
  return (
    <ul className="list-group">
      {patients.length === 0 ? (
        // Display message if no patients are available
        <li className="list-group-item">No patients available</li>
      ) : (
        // Map through the patients array and display each patient's details
        patients.map((patient, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {patient.name} - {patient.email} - {patient.age} - {patient.address}
            </span>
            <div>
              {/* Button to edit patient details */}
              <button className="btn btn-warning btn-sm me-2" onClick={() => editPatient(index)}>
                Edit
              </button>
              {/* Button to delete patient */}
              <button className="btn btn-danger btn-sm" onClick={() => deletePatient(index)}>
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default PatientList;
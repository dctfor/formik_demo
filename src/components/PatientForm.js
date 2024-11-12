import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal, Button } from 'react-bootstrap';

/**
 * PatientForm component renders a form inside a modal to add or edit patient details.
 * 
 * @param {Object} props - The properties object.
 * @param {boolean} props.show - Determines if the modal is visible.
 * @param {Function} props.handleClose - Function to close the modal.
 * @param {Function} props.addPatient - Function to add a new patient.
 * @param {Function} props.updatePatient - Function to update an existing patient.
 * @param {Object} [props.editingPatient] - The patient data being edited, if any.
 * @param {Function} props.cancelEdit - Function to cancel the edit operation.
 * 
 * @returns {JSX.Element} The rendered component.
 */
function PatientForm({ show, handleClose, addPatient, updatePatient, editingPatient, cancelEdit }) {
  // State to manage form initial values
  const [initialValues, setInitialValues] = useState({ name: '', email: '', age: '', address: '' });

  // Update initial values if editingPatient changes
  useEffect(() => {
    if (editingPatient) {
      setInitialValues(editingPatient);
    } else {
      setInitialValues({ name: '', email: '', age: '', address: '' });
    }
  }, [editingPatient]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editingPatient ? 'Edit Patient' : 'Add Patient'}</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validate={values => {
          const errors = {};
          // Validate name field
          if (!values.name) {
            errors.name = 'Required';
          }
          // Validate email field
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          // Validate age field
          if (!values.age) {
            errors.age = 'Required';
          } else if (!/^\d+$/.test(values.age)) {
            errors.age = 'Invalid age';
          }
          // Validate address field
          if (!values.address) {
            errors.address = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulate a server request
          setTimeout(() => {
            if (editingPatient) {
              // Update existing patient
              updatePatient(values);
            } else {
              // Add new patient
              addPatient(values);
            }
            setSubmitting(false);
            resetForm();
            handleClose();
          }, 400);
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <Field type="text" name="name" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" name="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <Field type="text" name="age" className="form-control" />
                <ErrorMessage name="age" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <Field type="text" name="address" className="form-control" />
                <ErrorMessage name="address" component="div" className="text-danger" />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => {
                resetForm();
                cancelEdit();
                handleClose();
              }}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {editingPatient ? 'Update' : 'Submit'}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default PatientForm;
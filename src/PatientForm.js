import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function PatientForm({ addPatient, updatePatient, editingPatient }) {
  const [initialValues, setInitialValues] = useState({ name: '', email: '', age: '', address: '' });

  useEffect(() => {
    if (editingPatient) {
      setInitialValues(editingPatient);
    } else {
      setInitialValues({ name: '', email: '', age: '', address: '' });
    }
  }, [editingPatient]);

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.age) {
          errors.age = 'Required';
        } else if (!/^\d+$/.test(values.age)) {
          errors.age = 'Invalid age';
        }
        if (!values.address) {
          errors.address = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          if (editingPatient) {
            updatePatient(values);
          } else {
            addPatient(values);
          }
          alert('Form data saved to localStorage');
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {editingPatient ? 'Update' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default PatientForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log('Form Submitted:', values);
    // Simulate API submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="username" className="block">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="email" className="block">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div>
            <label htmlFor="password" className="block">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

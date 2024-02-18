import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  return (
    <>
      <div className=" flex items-center justify-center h-screen">
        <Formik
          initialValues={{
            fullName: "",
            userName: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              //alert(JSON.stringify(values, null, 2));
              console.log(values);
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          <div className="w-96 p-4 bg-white bg-opacity-75 backdrop-blur-lg rounded-md shadow-md">
            <Form className="flex flex-col gap-4">
              <label htmlFor="fullName">Full Name</label>
              <Field
                name="fullName"
                type="text"
                className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />

              <label htmlFor="userName">User Name</label>
              <Field
                name="userName"
                type="text"
                className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />

              <label htmlFor="email">Email Address</label>
              <Field
                name="email"
                type="email"
                className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name='email'/>

              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage name='password'/>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
}

export default SignUp
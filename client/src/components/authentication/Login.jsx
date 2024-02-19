import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {Link} from 'react-router-dom'
import * as Yup from "yup";
const Login = () => {
  return (
    <div className="">
      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="w-96 max-md:w-72 p-4 bg-white bg-opacity-75 lg:backdrop-blur-lg rounded-md shadow-md">
          <Form className="flex flex-col gap-4">
            <label htmlFor="userName">User Name</label>
            <Field
              name="userName"
              type="text"
              className="px-4 py-2 max-md:py-1 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className="px-4 py-2 max-md:py-1 border rounded-md focus:outline-none focus:border-blue-500"
            />

            <p>
              Don't Have an Account <Link to="/SignUp">Click Here</Link>
            </p>

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
  );
};

export default Login;

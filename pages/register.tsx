import React from "react";
import { Formik, Form, Field, FormikProps } from "formik";

type Props = {};

export default function register({}: Props) {
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(value) => alert(JSON.stringify(value))}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <input
              id="username"
              onChange={handleChange}
              value={values.username}
              type="text"
              placeholder="username"
            />
            <br />
            <input
              id="password"
              onChange={handleChange}
              value={values.password}
              type="text"
              placeholder="password"
            />
            <br />
            <button type="submit">Register </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

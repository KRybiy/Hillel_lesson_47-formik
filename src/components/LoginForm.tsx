import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const validationSchema = Yup.object({
    login: Yup.string()
      .required("Login is required")
      .min(3, "Login must be at least 3 characters")
      .max(15, "Login must be at most 15 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters"),
  });

  const handleSubmit = (values: { login: string; password: string }) => {
    console.log("Form submitted", values);
  };

  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isValid, dirty }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="login">Login</label>
            <Field
              id="login"
              name="login"
              type="text"
              className="form-control"
            />
            <ErrorMessage name="login" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className="form-control"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="form-error"
            />
          </div>
          <button
            type="submit"
            className="form-submit-btn"
            disabled={!isValid || !dirty}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

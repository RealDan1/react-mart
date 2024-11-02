import { useFormik } from 'formik';

export default function Login() {
  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be more than 8 Characters long';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(
        'Login successful \nEmail:' +
          values.email +
          '\nPassword:' +
          values.password
      );
    },
  });

  return (
    // Note the use of the formik object below
    <form className="login-form" onSubmit={formik.handleSubmit}>
      {' '}
      {/* // Submit handler */}
      <div className="login-container">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {/* // Tweaked error message display logic */}
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="login-container">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {/* // Tweaked error message display logic */}
        {formik.touched.password && formik.errors.password ? (
          <div>
            <i>{formik.errors.password}</i>
          </div>
        ) : null}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

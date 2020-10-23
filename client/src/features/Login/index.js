import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaGoogle } from 'react-icons/fa';
import styles from './styles.module.css';
import Button from '../../components/Button';
import AuthAPI from '../../api/AuthAPI';
import Alert from '../../components/Alert';

const Login = () => {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Password is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    }),
    onSubmit: async (values) => {
      try {
        const { email, password } = values;
        setSubmit(true);
        const { data } = await AuthAPI.login(email, password);
        setSubmit(false);
        const url = `/profile/${data.user._id}`;
        history.push(url);
      } catch (err) {
        setError(err.response.data.message);
        setSubmit(false);
      }
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Login </h1>
      {error && <Alert type="error" message={error} />}
      <div className={styles.socialLogin}>
        <Button
          type="button"
          title="Continue with Google"
          icon={<FaGoogle />}
          variant="outline"
        />
      </div>
      <div className={styles.or}>
        <p>or</p>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className={styles.group}>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className={styles.group}>
          <Button
            type="submit"
            disabled={submit}
            title="Login"
            size={2}
            classType="primary"
            loading={submit}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

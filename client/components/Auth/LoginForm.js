import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearError } from '../../store/user/userAction';
import Button from '../Shared/Button';
import { Alert } from '../Shared/Notif';

const LoginForm = () => {
  const { error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    return () => dispatch(clearError());
  }, []);

  const formik = useFormik({
    initialValues: {
      password: '',
      email: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required')
    }),
    onSubmit: async values => {
      setSubmit(true);
      await dispatch(login(values));
      setSubmit(false);
    }
  });

  return (
    <>
      {error && <Alert type="error" message={error} />}
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="group">
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="group">
          <input
            type="password"
            name="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="group">
          <Button
            type="submit"
            disabled={submit}
            title="Login"
            size={2}
            style={{ height: '6rem' }}
            classType="primary"
            loading={submit}
          />
        </div>
      </form>
      <style jsx>
        {`
          .form input {
            width: 100%;
            border: 1px solid var(--color-light-gray);
            height: 6rem;
            border-radius: 6px;
            padding: 0 1.5rem;
            font-size: 1.6rem;
            background-color: var(--color-light-gray);
          }

          .group {
            margin-top: 2rem;
          }

          .error {
            color: red;
            font-size: 1.5rem;
            padding-top: 1rem;
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default LoginForm;

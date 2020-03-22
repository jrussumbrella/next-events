import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from '../../store/user/userAction';
import Button from '../Shared/Button';

const EditUserDetails = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.auth);

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required')
    }),
    onSubmit: async values => {
      await dispatch(updateUserDetails(token, values));
    }
  });

  return (
    <div>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="group">
          <Button
            type="submit"
            classType="primary"
            title="Update"
            loading={isSubmit}
          />
        </div>
      </form>
      <style jsx>{`
        .form {
          width: 100%;
        }

        .form input {
          width: 100%;
          border: 1px solid transparent;
          border-bottom: 1px solid var(--color-gray);
          padding: 1rem;
        }

        .form input:focus {
          outline: none;
        }

        .group {
          margin-bottom: 1.5rem;
        }

        .error {
          color: var(--text-danger);
          font-size: 1.7rem;
          padding-top: 0.5rem;s
        }
      `}</style>
    </div>
  );
};

export default EditUserDetails;

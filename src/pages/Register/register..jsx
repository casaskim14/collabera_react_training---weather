import React from 'react';
import PropTypes from 'prop-types';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';

function Register({ register }) {
  return (
    <CustomForm
      initialValues={registerInitialValues}
      onSubmit={register}
      fields={registerFields}
      btnText="Sign in"
    />
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;

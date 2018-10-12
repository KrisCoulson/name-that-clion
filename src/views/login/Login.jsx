import React from "react";
import { Formik } from "formik";
import styled from "styled-components";

import Button from "../../ui/Button";
import Logo from "../../ui/Logo";

const LoginWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 40px;
`;

const Login = props => {
  const onSubmit = values => {
    console.log(values);
    props.navigate("/start");
  };

  return (
    <LoginWrapper>
      <Logo />
      <FormWrapper>
        <Formik onSubmit={onSubmit}>
          {({ errors, handleSubmit, setFieldValue, touched, values }) => (
            <form onSubmit={handleSubmit}>
              <Button type="submit" size={30}>
                Sign in with Google
              </Button>
            </form>
          )}
        </Formik>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;

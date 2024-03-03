import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, ErrorMessage } from './SignInForm.styled';


const signInSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  

export const SignInForm = ({handleSubmit}) => {
  return (
    <div>
        <h1>Sign In</h1>
        <p>Welcome! Please enter your credentials to login to the platform:</p>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signInSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          <Field name="email" id = "email" type = "email" placeholder = "Email"/>
          <ErrorMessage name="email" component="span" />
        </FormGroup>
        <FormGroup>
          <Field name="password"  id = "password" type = "password" placeholder = "Password"/>
          <ErrorMessage name="password" component="span" />
        </FormGroup>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  );
};
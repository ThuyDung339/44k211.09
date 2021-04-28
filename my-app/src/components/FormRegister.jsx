import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './style.css';
import logo from './../assets/images/logo.png';
import Axios from 'axios'

const FormRegister = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setUserName] = useState('');
  const initialValues = { email: '', password: '', first_name: '' };
  
  const registerHandle = () => {
    if (!email || !password || !first_name) {
      return alert("e tao mot cai alert o day de canh bao loi nhe")
    }

    Axios.get('http://localhost:3098/api/user/register', {email, password, first_name})
  }
  
   return (
     <div className="formik-auth">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
           actions.setSubmitting(false);
           handleSubmit(values)
         }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email is required").email('Invalid email'),
          password: Yup.string()
            .max(10)
                .required("Password is required"),
          first_name: Yup.string()
            .required("Name is required"),          
        })}
>
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form className="form-auth" onSubmit={handleSubmit}>
              {/* <label htmlFor="first_name" style={{ display: "block" }}>
                Name
              </label> */}
              <div className='logo'>
                <img src={logo} alt="logo" style={{ width: "100px" }}/>
              </div>
               <div>
              <input
                id="first_name"
                placeholder="Enter your username"
                type="text"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.first_name && touched.first_name
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.first_name && touched.first_name && (
                <div className="input-feedback">{errors.first_name}</div>
              )}                
              {/* <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label> */}
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              {/* <label htmlFor="password" style={{ display: "block" }}>
                Password
              </label>               */}
              <input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" disabled={isSubmitting} className='submit-auth'>
                  Đăng kí
              </button>
              </div>
            </form>
          );
        }}
      </Formik>       
     </div>
   );
};

export default FormRegister;

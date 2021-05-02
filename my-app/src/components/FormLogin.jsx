import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ForgotPassword from './ForgotPassword';
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import logo from './../assets/images/logo.png';
const FormLogin = ({ handleSubmit }) => {
  const initialValues = { email: '', password: '' };
  const [forgot, setforgot] = useState(false);
  const  fforgot =()=> {
    setforgot(true);
    }
  return (
    <div>
       {forgot === true ?<ForgotPassword/>:
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
            <form onSubmit={handleSubmit} className="form-auth">
              {/* <label htmlFor="email" style={{ display: "block" }}>
                Email
              </label> */}
              <div className='logo'>
                <img src={logo} alt="logo" style={{ width: "100px" }}/>
              </div>
              <div>
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
                Đăng nhập
              </button>
                {/* <p style={{ cursor: 'pointer', color: "#007eff" }} onClick={fforgot}>Forgot  your password?</p> */}
                 <div><span>Chưa có tài khoản?</span><a href='/register'>Đăng kí</a></div>
                </div>
            </form>
          );
        }}
      </Formik>       
     </div>       
       
       }
    </div> 

   );
};

export default FormLogin;

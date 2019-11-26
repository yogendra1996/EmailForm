import React from 'react';
import {Formik, yupToFormErrors} from 'formik';
import * as Yup from 'yup'

const LoginForm = ( ) => (
    <Formik
        initialValues={{ email:"" , password: ""}}
        onSubmit={(values,{setSubmitting}) => {
            setTimeout(( ) => {
                  console.log( " Logging in " , values)
            } , 500);
        }}
         
         //here we will define validation
         validationSchema ={ Yup.object().shape({
             email:Yup.string()
                          .email( )
                          .required("Required"),

                          password:Yup.string()
                                   .required("No Password Provided")
                                   .min(8,"Password is too short - should be 8 characters long")
                                   .matches(/(?=.*[0-9])/,"password should contain a number")
                                  })}
                                     >
                                    {props => {
                                    const  {
                                    values,
                                     touched,
                                     errors,
                                     isSubmitting,
                                     handleChange,
                                    handleSubmit,
                                    handleBlur
                                    } = props;

                return (
                    <form autoComplete = "off" onSubmit = {handleSubmit} >
                   <label htmlFor= "email">Email</label>

                    <input 
                     type="text" 
                       value={values.email} 
                       name="email" 
                       onChange={handleChange}
                       onBlur={handleBlur}
                        placeholder="Enter your email address"
                         className={errors.email && touched.email && "error"}
                          />
                      {errors.email && touched.email && (<div className="input-feedback">{ errors.email }</div>
                        )}

                    <label htmlFor="password">Password</label>

                     <input 
                      type="password" 
                        value={values.password} 
                       name = "password"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       placeholder="Enter your valuable password"
                       className={errors.email && touched.password && "error"}
                       />
                    {errors.password && touched.password && (<div className="input-feedback">{ errors.password }</div>
                    )}
                    <button type="submit" disabled={isSubmitting}>Login
                    </button>
                    </form>
         );
         } }
         </Formik>
)

export default LoginForm
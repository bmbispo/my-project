import React from 'react';

import { ErrorMessage, Formik, Form, Field } from 'formik' ;

import * as yup from 'yup';


import '../register/Register.css';

const Register = () => {

        const validations = yup.object().shape({
           firstName: yup.string().required(), 
           email: yup.string().email().required(),
           password: yup.string().min(8).required() 
        })
        return(
        <>
        
        <Formik 
            initialValues={{
                firstName: '',
                email:'',
                password:''
            }}  
            validationSchema={validations}
        >
            <div className="Register-Global">
                    <p><h1>Register</h1></p> 
                    <p>Fil the fields to create a new user</p>
                <Form className="Register">
                    
                    <div className="Register-Group">
                        <Field
                            name="firstName"
                            placeholder="Nome"
                            className="Register-Field"
                        />
                        <ErrorMessage 
                            component="span" 
                            name="firstName" 
                            className="Register-Error"
                        />
                    </div>

                    <div className="Register-Group">
                        <Field
                            name="email" 
                            placeholder="Email"
                            className="Register-Field"
                        />
                        <ErrorMessage 
                            component="span" 
                           
                            name="email" 
                            className="Register-Error"
                        />
                    </div>
    
                    <div className="Register-Group">
                        <Field
                            name="password" 
                            placeholder="Senha"
                            type="password"
                            className="Register-Field"
                        />
                        <ErrorMessage 
                            component="span" 
                            name="password" 
                            className="Register-Error"
                        />
                    </div>
                    <button className="Register-Btn" type="submit" >
                         Register
                    </button>

                    <button  className="Register-Btn-Login"  >
                        <a href="/">voltar para Login</a>
                    </button>
                    
                </Form>
            </div>
        </Formik>
        </>
        )
    
    
}

export default Register;
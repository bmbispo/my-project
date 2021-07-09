import React from 'react';

import { ErrorMessage, Formik, Form, Field } from 'formik' ;

import * as yup from 'yup';

import '../login/Login.css';

const Login = () => {
    const validations = yup.object().shape({
       email: yup.string().email().required(),
       password: yup.string().min(8).required() 
    })
    return(
    <>
    
    <Formik 
        initialValues={{
            email:'',
            password:''
        }}  
        validationSchema={validations}
    >
        <div className="Login-Global">
            <p><h1>Login</h1></p>  
            <p>Fil the fields to continue</p>
            <Form className="Login">
                <div className="Login-Group">
                    <Field
                        name="email" 
                        placeholder="Email"
                        className="Login-Field"
                    />
                    <ErrorMessage 
                        component="span" 
                        name="email" 
                        className="Login-Error"
                    />
                </div>

                <div className="Login-Group">
                    <Field
                        name="password" 
                        placeholder="Senha"
                        type="password"
                        className="Login-Field"
                    />
                    <ErrorMessage 
                        component="span" 
                        name="password" 
                        className="Login-Error"
                    />
                </div>
                <button className="Login-Btn" type="submit" >
                     Login
                </button>
                <button  className="Login-Btn-Register">
                      <a href="/register">Criar Registro</a>
                </button>
            </Form>
        </div>
    </Formik>
    </>
    )
}



export default Login;
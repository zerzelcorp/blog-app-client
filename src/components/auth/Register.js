import React from "react";
import { postData } from "../../helpers/postData";

import { Formik,Form, Field, ErrorMessage } from "formik";

export const Register = () => {

const signUp = (e)=>{

 e.preventDefault()
 if(values){
   postData(values)
  //  fetch(`http://localhost:3100/auth/register`,{
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //     method:"POST",
  //     body:JSON.stringify(values)
  //  })
  //  .then(res=>{
  //    res.json()
  //  })
  //  .then(data=>console.log('Success:',data))
  //  .catch(e=>{
  //    console.warn('Error:',e);
  //  });
 }
 }

  return (
    <div id="register" className="animate__animated animate__fadeIncontainer-fluid d-flex align-items-center justify-content-center p-2">
<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             className="form-control"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             className="form-control"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  );
};

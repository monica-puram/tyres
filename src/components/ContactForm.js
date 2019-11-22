import React from 'react';
import { Formik } from 'formik';
import "../css/contactForm.css";

const ContactForm = () => (
  <div>
    <Formik
      initialValues={{ firstName: '', lastName:'', email: '', contact: '', country:'', comments: ''}}
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
        <div className = "entireForm">
        <form className="contactUsForm" onSubmit={handleSubmit}>
          <h1 className = "formHeading">Please submit your enquires :</h1>
          <div className = "fieldGroup"> 
            <label htmlFor="firstName" className = "formLabels">FirstName</label>
            <input className = "inputs"
             type="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Enter FirstName"
          />
          {errors.firstName && touched.firstName && errors.firstName}
          </div>
         
          <div className = "fieldGroup">
            <label htmlFor="lastName" className = "formLabels">LastName</label>
            <input className = "inputs"
              type="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter lastName"
            />
            {errors.lastName && touched.lastName && errors.lastName}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="email" className = "formLabels">Email</label>
            <input className = "inputs"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter your email address"
            />
            {errors.email && touched.email && errors.email}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="contact" className = "formLabels">Contact#</label>
            <input className = "inputs"
              type="contact"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter contact number"
            />
            {errors.contact && touched.contact && errors.contact}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="country" className = "formLabels">Country</label>
            <input className = "inputs"
              type="country"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter your nationality"
            />
            {errors.country && touched.country && errors.country}
          </div>

          <div className = "fieldGroup">
            <label htmlFor="comments" className = "formLabels">Comments</label>
            <textarea className = "inputs"
              type="text-area"
              name="comments"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter your comments here"></textarea>
            {errors.comments && touched.comments && errors.comments}
          </div>
        <div className= "submitBtn">
        <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
          
        </form>
        </div>
      )}
    </Formik>
  </div>
);

export default ContactForm;
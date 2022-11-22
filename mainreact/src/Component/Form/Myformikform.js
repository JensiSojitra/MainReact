import React from 'react';
import { Formik, Field, Form } from 'formik';

const Mydataformik = () => {
  return (
    <div>
      <Formik initialValues={
        {
          firstname: "",
          middlename: "",
          lastname: "",
          age: "",
          city: ""
        }
      }

        onSubmit={
          (e) => {
            console.log(e);
          }
        }>
        <Form>
          <label htmlFor="">Firstname:</label>
          <Field name="firstname" id="firstname" type="text" /><br />
          <label htmlFor="">Middlename:</label>
          <Field name="middlename" id="middlename" type="text" /><br />
          <label htmlFor="">Lastname:</label>
          <Field name="lastname" id="lastname" type="text" /><br />
          <label htmlFor="">Age:</label>
          <Field name="age" id="age" type="text" /><br />
          <label htmlFor="">City:</label>
          <Field name="city" id="city" type="text" /><br /><br />

          <input type="submit" value="Save" />
        </Form>
      </Formik>
    </div>
  );
}

export default Mydataformik;


import React from "react";
import { Form, Field } from "react-final-form";

function StreamForm(props) {
  return (
    <Form
      initialValues={{ title: props.title, description: props.description }}
      onSubmit={props.onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Description"
              required
            />
          </div>
          <div className="buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    />
  );
}

export default StreamForm;

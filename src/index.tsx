import * as React from "react";
import { render } from "react-dom";
import {
  StepWizard,
  StepWizardPage,
  ThemeProvider,
  themes,
} from "@lokalise/louis";

import { Formik, Form, useFormikContext } from "formik";

const Basic = () => {
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormikContext<{ email: string; password: string }>();
  return (
    <Form
      onSubmit={() => {
        console.log("native form submit");
        handleSubmit();
      }}
    >
      <StepWizard
        submitText="Submit"
        onSubmit={() => {
          console.log("stepwizard submit");
          handleSubmit();
        }}
      >
        <StepWizardPage label="Email">
          <>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </>
        </StepWizardPage>
        <StepWizardPage label="Password">
          <>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <p>
              The button below does not have an explicit type attribute set.
              Clicking it will trigger the Formik submit warning in the console
              devtools.
            </p>
            <button>A dangerous button!</button>
          </>
        </StepWizardPage>
      </StepWizard>
    </Form>
  );
};

const App = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={({ email }) => {
        if (!email) return { email: "Required" };
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
          return { email: "Invalid email address" };
        return {};
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <ThemeProvider theme={themes.light}>
        <Basic />
      </ThemeProvider>
    </Formik>
  );
};

render(<App />, document.getElementById("root"));

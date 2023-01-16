import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { KnightPositionType } from "../types";

const schema = yup.object().shape({
  x: yup.string().required("Please enter x"),
  y: yup.string().required("Please enter y"),
});

function KnightPositionForm({
  onSubmit,
}: {
  onSubmit: (values: KnightPositionType) => void | Promise<any>;
}) {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        x: "",
        y: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control
                required
                type="number"
                placeholder="Enter x"
                name="x"
                value={values.x}
                onChange={handleChange}
                max={7}
                min={0}
                step={1}
                isInvalid={touched.x && !!errors.x}
              />
              <Form.Control.Feedback type="invalid">
                {errors.x}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control
                required
                type="number"
                placeholder="Enter y"
                name="y"
                value={values.y}
                onChange={handleChange}
                max={7}
                min={0}
                step={1}
                isInvalid={touched.y && !!errors.y}
              />
              <Form.Control.Feedback type="invalid">
                {errors.y}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Button className="text-center" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default KnightPositionForm;

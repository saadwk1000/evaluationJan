import React, { useState } from "react";
import { useFormik } from "formik";
import { RegisterValidation } from "../../../shared/utils/validation";
import styles from "./style.module.scss";

const Register: React.FC = () => {
  const [error, setError] = useState<string>("");

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema: RegisterValidation,
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      setError("");
      console.log("Register Data:", values);
    },
  });

  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p className={styles.error}>{formik.errors.name}</p>
        )}

        <input
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className={styles.error}>{formik.errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p className={styles.error}>{formik.errors.password}</p>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className={styles.error}>{formik.errors.confirmPassword}</p>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

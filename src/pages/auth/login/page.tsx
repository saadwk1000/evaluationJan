import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { LoginValidation } from "../../../shared/utils/validation";
import { login } from "../../../shared/redux/reducers/authSlice";
import DummyLogin from "../../../shared/auth/authConfig";
import styles from "./style.module.scss";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      setError("");

      if (
        values.email === DummyLogin.email &&
        values.password === DummyLogin.password
      ) {
        dispatch(login());
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    },
  });

  return (
    <div className={styles.login}>
      <h1>Login</h1>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={(e) => {
            formik.handleChange(e);
            setError("");
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className={styles.error}>{formik.errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={(e) => {
            formik.handleChange(e);
            setError("");
          }}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p className={styles.error}>{formik.errors.password}</p>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.loginButton} type="submit">
          Login
        </button>
      </form>

      <p className={styles.registerLink}>
        Don't have an account? <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;

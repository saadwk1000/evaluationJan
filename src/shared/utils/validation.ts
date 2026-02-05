import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const RegisterValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const InventoryValidation = Yup.object({
  name: Yup.string().required("Item name is required"),
  category: Yup.string().required("Category is required"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .min(0, "Quantity cannot be negative")
    .required("Quantity is required"),
});

import * as yup from "yup";
export const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("You entered a invalid email."),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(24, "Password must be max 24characters long"),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

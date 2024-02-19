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

export const loginSchema = yup.object({
  loginEmail: yup
    .string()
    .required("Email is required")
    .email("You entered a invalid email."),
  loginPassword: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(24, "Password must be max 24characters long"),
});

export const invoiceFormSchema = yup.object({
  invoiceDate: yup.date().required("Invoice date is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  street: yup.string().required("Street is required"),
  postCode: yup.string().required("Post code is required"),
  total: yup.number().required("Total amount is required"),
  clientName: yup.string().required("Client name is required"),
  clientEmail: yup
    .string()
    .email("Invalid email format")
    .required("Client email is required"),
  description: yup.string(),
  clientCountry: yup.string().required("Client country is required"),
  clientCity: yup.string().required("Client city is required"),
  clientStreetAddress: yup
    .string()
    .required("Client street address is required"),
  clientPostCode: yup.string().required("Client post code is required"),
  quantityName: yup
    .number()
    .required("Quantity is required")
    .positive("Quantity must be positive"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be positive"),
  name: yup.string().required("Item name is required"),
  paymentTerms: yup.string().required("Payment terms are required"),
});

import * as Validate from "yup";

export const registerSchema = Validate.object({
  username: Validate.string().required("Username is required"),
  email: Validate.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Validate.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

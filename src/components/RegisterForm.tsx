import { useFormik } from "formik";
import { registerSchema } from "../utils/yup";
import { RegisterFormValues } from "../utils/interface";

const RegisterForm = () => {
  const initialValues: RegisterFormValues = {
    username: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values: any) => {
      console.log(values);
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm text-black font-medium"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.username}
            className={`mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm ${
              formik.touched.username && formik.errors.username
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="mt-2 text-sm text-red-600">
              {typeof formik.errors.username === "string" &&
                formik.errors.username}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm text-black font-medium"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.email}
            className={`mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {typeof formik.errors.email === "string" && formik.errors.email}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm text-black font-medium"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.password}
            className={`mt-1 bg-white text-black block w-full p-2 border rounded-md shadow-sm ${
              formik.touched.password && formik.errors.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {typeof formik.errors.password === "string" &&
                formik.errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

import RegisterForm from "../components/forms/RegisterForm";
import AuthLayout from "../layout/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      {/* Form register */}
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;

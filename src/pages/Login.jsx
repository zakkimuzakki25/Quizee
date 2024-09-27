import LoginForm from "../components/forms/LoginForm";
import AuthLayout from "../layout/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      {/* Form login */}
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;

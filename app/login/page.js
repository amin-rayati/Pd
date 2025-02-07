import LoginForm from "@/components/Login-components/LoginForm";
import LoginInfo from "@/components/Login-components/LoginInfo";
const page = () => {
  return (
    <div className="grid grid-cols-12">
      <LoginInfo />
      <LoginForm />
    </div>
  );
};

export default page;

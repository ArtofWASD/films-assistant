import RegisterForm from "../../src/components/forms/register-form/register-form"


const RegisterPage = () => {
  return (
    <>
    <div className="flex flex-col items-center">
        <p className="text-white">Регистрация</p>
        <div><RegisterForm/></div>
    </div>
    </>
  )
}

export default RegisterPage
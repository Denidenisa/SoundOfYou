import { RegisterForm } from '../components/RegisterForm'

export const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <section className="py-6 flex items-center gap-6">
          <h1 className="text-3xl text-white font-inter">
            Créer un compte
          </h1>
        </section>
        <section className="flex flex-col gap-4 pb-12">
          <RegisterForm />
        </section>
      </div>
    </div>
  )
}
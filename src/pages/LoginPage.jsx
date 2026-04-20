import { LoginForm } from '../components/LoginForm'

export const LoginPage = () => {
    return (
        <div className="min-h-screen bg-dark flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <section className="py-6 flex items-center gap-6">
                    <h1 className="text-3xl text-white font-inter ">
                        Se connecter
                    </h1>
                </section>
                <section className="flex flex-col gap-4 pb-12">
                    <LoginForm />
                </section>
            </div>
        </div>
    )
}

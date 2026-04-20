import authService from '../services/auth.service'
import { useNavigate } from 'react-router'
import { useSetAtom } from 'jotai'
import { tokenAtom } from '../atoms/auth.atom'
import { useId } from 'react'

export const LoginForm = () => {
    const id = useId()
    const navigate = useNavigate()
    const setToken = useSetAtom(tokenAtom)

    const handleLoginSubmit = async (formData) => {
        const data = Object.fromEntries(formData.entries())
        const response = await authService.login(data)
        setToken(response.token)
        navigate('/')
    }

    return (
        <form
            action={handleLoginSubmit}
            className="bg-dark-card rounded-2xl border border-dark-border p-8 flex flex-col gap-5"
        >
            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor={id + 'email'}
                    className="text-xs font-medium tracking-widest uppercase text-muted"
                >
                    Email d'utilisateur
                </label>
                <input
                    id={id + 'email'}
                    type="text"
                    name="email"
                    placeholder="exemple@mail.com"
                    className="border border-dark-border rounded-lg px-4 py-2.5 bg-dark text-white placeholder:text-subtle focus:outline-none focus:border-muted"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor={id + 'password'}
                    className="text-xs font-medium tracking-widest uppercase text-muted"
                >
                    Mot de passe
                </label>
                <input
                    id={id + 'password'}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="border border-dark-border rounded-lg px-4 py-2.5 bg-dark text-white placeholder:text-subtle focus:outline-none focus:border-muted"
                />
            </div>

            <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-muted text-white font-medium tracking-wide hover:bg-subtle transition duration-200"
            >
                Se connecter
            </button>
        </form>
    )
}
import { useSetAtom } from "jotai"
import { useId } from "react"
import { useNavigate } from "react-router"
import authService from "../services/auth.service"
import { tokenAtom } from '../atoms/auth.atom'

export const RegisterForm = ()=>{
    const id =useId()
    const navigate =useNavigate()
   const setToken = useSetAtom(tokenAtom)

    const handleRegisterSubmit =async (formData)=>{
        const data =Object.fromEntries(formData.entries())
        const response =await authService.register(data)
        setToken(response.token)
        navigate('/')

    }
    return (
    <form action={handleRegisterSubmit} className="bg-dark-card rounded-2xl border border-dark-border p-8 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id + 'username'} className="text-xs font-medium tracking-widest uppercase text-muted">
          Nom d'utilisateur
        </label>
        <input
          id={id + 'username'}
          type="text"
          name="username"
          placeholder="Billy"
          className="border border-dark-border rounded-lg px-4 py-2.5 bg-dark text-white placeholder:text-subtle focus:outline-none focus:border-muted"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id + 'email'} className="text-xs font-medium tracking-widest uppercase text-muted">
          Email
        </label>
        <input
          id={id + 'email'}
          type="email"
          name="email"
          placeholder="exemple@mail.com"
          className="border border-dark-border rounded-lg px-4 py-2.5 bg-dark text-white placeholder:text-subtle focus:outline-none focus:border-muted"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id + 'password'} className="text-xs font-medium tracking-widest uppercase text-muted">
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
        Créer mon compte
      </button>
    </form>
  )
}
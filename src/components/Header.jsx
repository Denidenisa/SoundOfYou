import { Link } from 'react-router'
import { useAtom } from 'jotai'
import { tokenAtom, isConnectedAtom } from '../atoms/auth.atom'

export const Header = () => {
  const [isConnected] = useAtom(isConnectedAtom)
  const [, setToken] = useAtom(tokenAtom)

  const handleLogout = () => {
    setToken(null)
  }

  return (
    <header className="flex items-center justify-between px-12 py-4 border-b border-dark-border bg-dark">
      <Link to="/" className="text-2xl font-playfair italic text-white">
        Sound Of You
      </Link>
      <nav className="flex items-center gap-6">
        <Link to="/" className="text-muted hover:text-white transition duration-200">
          Accueil
        </Link>
        {isConnected ? (
          <button onClick={handleLogout} className="text-muted hover:text-white transition duration-200">
            Se déconnecter
          </button>
        ) : (
          <>
            <Link to="/auth/login" className="text-muted hover:text-white transition duration-200">
              Connexion
            </Link>
            <Link to="/auth/register" className="text-muted hover:text-white transition duration-200">
              S'inscrire
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
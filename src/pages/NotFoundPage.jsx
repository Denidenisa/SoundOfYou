import { Link } from 'react-router'
import { Particles } from '../components/Particles'

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        staticity={60}
        ease={80}
        size={0.4}
        color="#6366f1"
      />

      <h1 className="text-9xl font-extrabold font-playfair text-white opacity-20 relative z-10">
        404
      </h1>

      <h2 className="text-xl text-white font-playfair italic text-center relative z-10 px-4">
        Ce que tu cherches n'est pas sur la Terre, ni sur la Lune
      </h2>

      <img
        className="h-48 opacity-80 animate-pulse relative z-10"
        src="/images/lune.svg"
        alt="Une lune solitaire dans l'espace"
      />

      <Link
        to="/"
        className="relative z-10 mt-4 text-sm text-muted hover:text-white transition duration-200 underline decoration-dotted underline-offset-4"
      >
        Revenir à la maison
      </Link>

    </div>
  )
}

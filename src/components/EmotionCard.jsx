import { Link } from 'react-router'

export const EmotionCard = ({ emotion }) => {
  const descriptions = {
    'Triste': 'Les larmes sont des étoiles qui tombent vers la terre.',
    'Anxieux': 'Comme un renard qui attend l\'heure de la rencontre, le cœur bat pour demain.',
    'Brisé': 'Même les planètes ont des cratères pour laisser passer la lumière.',
    'En colère': 'Un orage lointain qui ne demande qu\'à s\'apaiser sous les étoiles.',
    'Perdu': 'Parfois, il faut s\'égarer dans l\'espace pour trouver sa propre constellation.',
    'En reconstruction': 'On ne plante pas de baobabs, on cultive des roses dans le cosmos.',
    'Joyeux': 'Même les étoiles dansent quand le cœur chante.'
  }

  const icons = {
    'Triste': '/images/sad-circle-svgrepo-com.svg',
    'Anxieux': '/images/anxiety-svgrepo-com.svg',
    'Brisé': '/images/broken-heart-svgrepo-com.svg',
    'En colère': '/images/angry-basic-ui-svgrepo-com.svg',
    'Perdu': '/images/confused-svgrepo-com.svg',
    'En reconstruction': '/images/grow-growth-plant-svgrepo-com.svg',
    'Joyeux': '/images/happy.svg',
  }

  return (
    <Link
      to={`/emotions/${emotion._id}`}
      className="rounded-2xl p-8 flex flex-col items-center gap-3 hover:-translate-y-1 transition duration-300 cursor-pointer relative overflow-hidden"
      style={{ backgroundColor: emotion.color, border: `0.5px solid ${emotion.color}44` }}
    >
      <img
        src={icons[emotion.name]}
        alt={emotion.name}
        className="w-12 h-12 relative z-10"
      />
      <span
        className="text-xs font-medium tracking-widest uppercase relative z-10"
        style={{ color: 'rgba(255,255,255,0.9)' }}
      >
        {emotion.name}
      </span>
      <span
        className="text-xs text-center italic font-playfair relative z-10"
        style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em' }}
      >
        {descriptions[emotion.name]}
      </span>
    </Link>
  )
}
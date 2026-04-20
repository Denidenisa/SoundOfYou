import { useEffect, useState } from 'react'
import { EmotionCard } from '../components/EmotionCard'
import emotionService from '../services/emotion.service'
import { Particles } from '../components/Particles'

export const HomePage = () => {
  const [emotions, setEmotions] = useState([])

  useEffect(() => {
    emotionService.getAll().then(setEmotions)
  }, [])

  return (
    <div className="min-h-screen bg-dark px-12 py-10 relative overflow-hidden">
      
      <Particles
        className="absolute inset-0 z-0"
        quantity={120}
        staticity={40}
        ease={60}
        size={0.5}
        color="#a5b4fc"
      />

      <section className="mb-10 relative z-10">
        <h1 className="text-4xl text-white font-playfair mb-2">Comment tu te sens ?</h1>
        <p className="text-muted">Choisis une émotion pour découvrir des chansons partagées par la communauté.</p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {emotions.map((emotion) => (
          <EmotionCard key={emotion._id} emotion={emotion} />
        ))}
      </section>

    </div>
  )
}
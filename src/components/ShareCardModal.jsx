import { useRef } from 'react'
import { createPortal } from 'react-dom'
import html2canvas from 'html2canvas'

export const ShareCardModal = ({ visible, onClose, emotionName, emotionColor, songTitle, artist, story }) => {
  const cardRef = useRef(null)

  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: emotionColor,
      logging: false,
    })
    const a = document.createElement('a')
    a.download = `sound-of-you-${emotionName}.png`
    a.href = canvas.toDataURL('image/png')
    a.click()
  }

  if (!visible) return null

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', zIndex: 99999 }}
      onClick={onClose}
    >
      <div
        className="bg-dark-card rounded-2xl p-5 w-full max-w-sm flex flex-col gap-4"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        <div
          ref={cardRef}
          className="rounded-2xl p-8 flex flex-col gap-4"
          style={{ background: emotionColor }}
        >
          <p className="text-xs font-medium tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.6)' }}>sound of you</p>
          <h2 className="text-4xl font-playfair" style={{ color: '#ffffff' }}>{emotionName}</h2>
          <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <p className="font-medium" style={{ color: '#ffffff' }}>{songTitle}</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{artist}</p>
            <p className="text-xs italic font-playfair" style={{ color: 'rgba(255,255,255,0.8)' }}>"{story}"</p>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>sound-of-you-delta.vercel.app</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 rounded-xl py-3 text-sm font-medium text-white"
            style={{ background: emotionColor }}
          >
            Télécharger
          </button>
          <button
            onClick={onClose}
            className="px-4 rounded-xl border border-dark-border text-sm"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
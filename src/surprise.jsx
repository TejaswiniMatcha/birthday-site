import confetti from 'canvas-confetti'
import { useState } from 'react'


export default function Surprise({ setPage }) {
  const [showMessage, setShowMessage] = useState(false)

  const handleSurprise = () => {
    confetti({
      particleCount: 300,
      spread: 180,
      origin: { y: 0.6 },
    })

    setShowMessage(true)

  }

  return (
    <section className="min-h-screen py-24 bg-gradient-to-br from-red-950 via-pink-900 to-rose-900 flex flex-col items-center justify-center text-center px-6">

      <button
        onClick={handleSurprise}
        className="px-12 py-6 text-2xl bg-gradient-to-r from-red-600 to-pink-600 rounded-full font-bold hover:scale-110 transition"
      >
        Click For Surprise 🎁
      </button>

      {showMessage && (
        <div className="mt-12 text-4xl font-bold animate-pulse text-white">
            I am genuinely happy that you are my friend.No matter what what comes in the future we will face it together.Don't loose hope,be strong and happy.You'll always have me by your side no matter what happens.You are a bird wandering in the clouds....Don't cut your wings by shattering your hopes.
          Finally........You Are Amazing ✨💖
          
          Your mrudhula always comes for you....Don't worry Arjun Sarkar!!
        </div>
      )}

      {/* Navigation Button */}
      <button
        onClick={() => setPage('celebration')}
        className="mt-16 text-7xl hover:scale-110 transition duration-300"
      >
        🎆
      </button>

      <p className="mt-4 text-pink-200 animate-pulse">
        Click the fireworks
      </p>

    </section>
  )
}
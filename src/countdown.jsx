import { useEffect, useState } from 'react'

export default function Countdown({ setPage }) {
  const birthdayDate = new Date('2026-06-08T00:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = birthdayDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-900 to-red-950 px-6 text-center">
      <h2 className="text-6xl font-bold mb-10">
        Countdown ⏳
      </h2>

      <div className="grid grid-cols-2 gap-6 mb-16">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="bg-white/10 p-8 rounded-3xl"
          >
            <h3 className="text-5xl font-bold">{value}</h3>
            <p className="capitalize mt-2">{label}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setPage('gallery')}
        className="text-7xl hover:scale-110 transition"
      >
        🎂
      </button>
    </section>
  )
}
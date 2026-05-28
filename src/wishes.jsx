import { useState } from 'react'

export default function Wishes({ setPage }) {
  const [wish, setWish] = useState('')
  const [messages, setMessages] = useState([])

  const addWish = () => {
    if (wish.trim() !== '') {
      setMessages([...messages, wish])
      setWish('')
    }
  }

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-red-900 via-pink-900 to-rose-950 flex flex-col items-center justify-center">

      <h2 className="text-5xl font-bold text-center mb-12 text-white">
        Birthday Wishes 💌
      </h2>

      <div className="max-w-3xl w-full px-6">
        
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Write a birthday wish..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="flex-1 p-4 rounded-2xl bg-white/10 border border-white/20 outline-none text-white placeholder-pink-200 backdrop-blur-lg"
          />

          <button
            onClick={addWish}
            className="px-8 py-4 bg-red-600 rounded-2xl font-bold hover:scale-105 transition"
          >
            Send 🎉
          </button>
        </div>

        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white/10 p-5 rounded-2xl backdrop-blur-lg text-white border border-pink-300/20"
            >
              {msg}
            </div>
          ))}
        </div>

      </div>

      {/* Navigation Button */}
      <button
        onClick={() => setPage('surprise')}
        className="mt-16 text-7xl hover:scale-110 transition duration-300"
      >
        ✨
      </button>

      <p className="mt-4 text-pink-200 animate-pulse">
        Click the sparkle
      </p>

    </section>
  )
}
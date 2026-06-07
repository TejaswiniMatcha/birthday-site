import { motion } from 'framer-motion'

import song from './assets/song.mp3'

export default function Hero({ setPage }) {

  const handleClick = () => {

    const audio = new Audio(song)

    audio.volume = 0.5

    audio.play()

    setPage('countdown')
  }

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-pink-600 to-rose-500 relative overflow-hidden text-white">

      {/* Floating Hearts */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce">
        💖
      </div>

      <div className="absolute top-20 right-16 text-5xl animate-pulse">
        💕
      </div>

      <div className="absolute bottom-24 left-20 text-4xl animate-ping">
        ❤️
      </div>

      <div className="absolute bottom-10 right-10 text-6xl animate-bounce">
        💘
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-7xl md:text-9xl font-extrabold text-center drop-shadow-2xl"
      >
        Abeeda.....😘💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-2xl mt-6"
      >
        A Special Surprise Awaits You ✨
      </motion.p>

      {/* Heart Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="mt-16 text-8xl"
      >
        ❤️
      </motion.button>

      <p className="mt-4 text-lg animate-pulse">
        Click the heart
      </p>

    </section>
  )
}
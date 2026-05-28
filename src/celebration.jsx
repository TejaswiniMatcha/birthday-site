import { motion } from 'framer-motion'

export default function Celebration() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-pink-500 to-rose-700 text-center px-6">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-9xl"
      >
        🎂
      </motion.div>

      <h1 className="text-6xl md:text-8xl font-extrabold mt-10">
        Happy Birthday 🎉
      </h1>

      <p className="mt-6 text-2xl max-w-3xl">
        May your life be filled with happiness, success, love, and endless joy ✨
      </p>
      <div className="mt-12 text-6xl animate-bounce">
        🎆 🎇 ✨
      </div>
    </section>
  )
}
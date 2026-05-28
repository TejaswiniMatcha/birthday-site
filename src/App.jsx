import { useState } from 'react'
import Hero from './hero'
import Countdown from './countdown'
import Gallery from './gallery'
import Wishes from './wishes'
import Surprise from './surprise'
import Celebration from './celebration'

export default function App() {
  const [page, setPage] = useState('hero')

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">
      {page === 'hero' && <Hero setPage={setPage} />}

      {page === 'countdown' && (
        <Countdown setPage={setPage} />
      )}

      {page === 'gallery' && (
        <Gallery setPage={setPage} />
      )}

      {page === 'wishes' && (
        <Wishes setPage={setPage} />
      )}

      {page === 'surprise' && (
        <Surprise setPage={setPage} />
      )}

      {page === 'celebration' && <Celebration />}
    </div>
  )}
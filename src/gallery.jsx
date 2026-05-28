import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import photo1 from './assets/A1.jpeg'
import photo2 from './assets/A2.jpeg'
import photo3 from './assets/A3.jpeg'

export default function Gallery({ setPage }) {

  const images = [photo1, photo2, photo3]

  return (

    <section className="min-h-screen py-24 bg-gradient-to-br from-rose-950 via-red-900 to-pink-900 flex flex-col items-center justify-center overflow-hidden">

      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 md:mb-16 text-white px-4">
        Beautiful Memories 📸
      </h2>

      <div className="max-w-5xl w-full px-4 sm:px-6">

        <Swiper

          modules={[Autoplay, Pagination, Navigation]}

          spaceBetween={30}

          slidesPerView={1}

          loop={true}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          pagination={{ clickable: true }}

          navigation={true}

          className="rounded-3xl overflow-hidden shadow-2xl"
        >

          {images.map((img, index) => (

            <SwiperSlide key={index}>

              <img
  src={img}
  alt={`Memory ${index + 1}`}
  className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-contain bg-black/40 backdrop-blur-lg rounded-3xl border-4 border-pink-300 shadow-2xl"
  />
            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      <button
        onClick={() => setPage('wishes')}
        className="mt-10 md:mt-16 text-5xl md:text-7xl hover:scale-110 transition duration-300"
      >
        🎁
      </button>

      <p className="mt-4 text-pink-200 animate-pulse text-center px-4">
        Click the gift
      </p>

    </section>
  )
}
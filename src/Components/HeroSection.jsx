import React from 'react'

const HeroSection = () => {
  return (
    <>
        <section className="relative h-screen bg-contain bg-center bg-[url(https://imgs.search.brave.com/lGC4X59gKiOd_cdx7xYNzMwfrMXo4BoakYeKhKPgbQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0E1/U3RNSEF0d1VSd2Y1/OUVBUGJudmItODQw/LTgwLmpwZw)]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white py-32">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Our Service</h1>
                <p className="text-lg sm:text-xl mb-6">We provide top-quality solutions to help your business grow.</p>
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg sm:text-xl">Get Started</a>
            </div>
        </section>
    </>
)
}

export default HeroSection
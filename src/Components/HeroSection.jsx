import React from 'react'

const HeroSection = () => {
  return (
    <>
        <section className="relative h-screen bg-cover bg-center bg-[url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
            <div className='w-full h-full flex flex-col items-center justify-center bg-black/70'>
                <div className="relative z-10 text-center text-white py-32">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Our Service</h1>
                    <p className="text-lg font-medium sm:text-xl mb-6">We provide top-quality solutions to help your business grow.</p>
                    <a href="#contact">
                        <button class="cssbuttons-io-button ml-42 max-sm:ml-28 max-sm:mt-10 mt-5 font-medium sm:text-xl">Get Started
                            <div class="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    </>


)
}

export default HeroSection
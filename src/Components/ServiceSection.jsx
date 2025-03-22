import React from 'react'

const ServiceSection = () => {
  return (
    <>
        <section id="services" className="py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Services</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Service Card 1 --> */}
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-5">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">Web Development</h3>
                    <p className="text-gray-400 mb-4">We create modern, responsive websites to meet your business needs.</p>
                    <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                </div>
                {/* <!-- Service Card 2 --> */}
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-5">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">App Development</h3>
                    <p className="text-gray-400 mb-4">Our team builds powerful mobile applications for both iOS and Android.</p>
                    <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                </div>
                {/* <!-- Service Card 3 --> */}
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-5">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">SEO Optimization</h3>
                    <p className="text-gray-400 mb-4">We optimize your website to rank higher in search engine results.</p>
                    <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceSection
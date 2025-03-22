import React from 'react'

const PricingSection = () => {
  return (
    <>
    <section id="pricing" className="bg-zinc-800 py-16">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Pricing</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Basic Plan --> */}
                <div className="bg-black p-8 rounded-lg shadow-lg font-medium">
                    <h3 className="text-3xl sm:text-3xl font-semibold mb-2">Basic</h3>
                    <p className="text-2xl mb-4">$19 / month</p>
                    <ul className="text-center mb-10 space-y-2">
                        <li>1 Website</li>
                        <li>5 GB Storage</li>
                        <li>Email Support</li>
                    </ul>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg">Choose Plan</a>
                </div>
                {/* <!-- Pro Plan --> */}
                <div className="bg-black p-8 rounded-lg shadow-lg font-medium">
                    <h3 className="text-3xl sm:text-3xl font-semibold mb-2">Pro</h3>
                    <p className="text-2xl mb-4">$49 / month</p>
                    <ul className="text-center mb-10 space-y-2">
                        <li>5 Websites</li>
                        <li>50 GB Storage</li>
                        <li>Priority Support</li>
                    </ul>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg">Choose Plan</a>
                </div>
                {/* <!-- Enterprise Plan --> */}
                <div className="bg-black p-8 rounded-lg shadow-lg font-medium">
                    <h3 className="text-3xl sm:text-3xl font-semibold mb-2">Enterprise</h3>
                    <p className="text-2xl mb-4">$99 / month</p>
                    <ul className="text-center mb-10 space-y-2">
                        <li>Unlimited Websites</li>
                        <li>200 GB Storage</li>
                        <li>24/7 Support</li>
                    </ul>
                    <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg">Choose Plan</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PricingSection
import React from 'react'

const PricingSection = () => {

  return (
    <>
    <section id="pricing" className="bg-zinc-800 py-16">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Pricing</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Basic Plan --> */}
                    <div class="card">
                    <div class="card-content-wrapper">
                        <div class="card-title">Basic</div>
                        <div class="card-price">
                        <span>$</span>
                        19
                        <span>/month</span>
                        </div>
                        <div class="card-subtitle">Benefits:</div>
                        <ul class="card-benefits">
                            <li>1 Website</li>
                            <li>5 GB Storage</li>
                            <li>Email Support</li>
                        </ul>
                    </div>
                    <button class="card-btn">More info</button>
                    </div>

                {/* <!-- Pro Plan --> */}
                
                    <div class="card">
                        <div class="card-content-wrapper">
                            <div class="card-title">pro</div>
                            <div class="card-price">
                            <span>$</span>
                            49
                            <span>/month</span>
                            </div>
                            <div class="card-subtitle">Benefits:</div>
                            <ul class="card-benefits">
                                <li>5 Websites</li>
                                <li>50 GB Storage</li>
                                <li>Priority Support</li>
                            </ul>
                        </div>
                        <button class="card-btn">More info</button>
                    </div>
                {/* <!-- Enterprise Plan --> */}
                
                <div class="card">
                    <div class="card-content-wrapper">
                        <div class="card-title">Enterprise</div>
                        <div class="card-price">
                        <span>$</span>
                        99
                        <span>/month</span>
                        </div>
                        <div class="card-subtitle">Benefits:</div>
                        <ul class="card-benefits">
                            <li>Unlimited Websites</li>
                            <li>200 GB Storage</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>
                    <button class="card-btn">More info</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PricingSection
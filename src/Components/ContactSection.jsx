import React from 'react'

const ContactSection = () => {
  return (
    <>
        <section id="contact" className="py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h2>
            <form className="max-w-3xl mx-auto bg-black p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-left text-lg font-semibold">Full Name</label>
                        <input type="text" name="name" className="w-full bg-zinc-800 outline-none p-3 rounded-lg mt-2" placeholder="Enter Name" required />
                    </div>
                    <div>
                        <label className="block text-left text-lg font-semibold">Email Address</label>
                        <input type="email" name="email" className="w-full bg-zinc-800 outline-none p-3 rounded-lg mt-2" placeholder="example@email.com" required />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-left text-lg font-semibold">Message</label>
                    <textarea name="message" className="w-full bg-zinc-800 outline-none p-3 rounded-lg mt-2" placeholder="Write your message here..." rows="6" required></textarea>
                </div>
                <div className="mt-6">
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg">Send Message</button>
                </div>
            </form>
        </section>
    </>
)
}

export default ContactSection
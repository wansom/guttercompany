export default function Contact() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        {/* ... navigation code ... */}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#4F46E5]/10 to-[#7C3AED]/10 py-20">
          <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with us for all your gutter service needs. We're here to help protect your home.
            </p>
          </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-5 lg:px-20">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
                <p className="text-gray-600">Minneapolis, Minnesota</p>
                <p className="text-gray-600">Service Area: Twin Cities Metro</p>
              </div>

              <div className="bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                <p className="text-gray-600">+1(612)-601-3945</p>
                <p className="text-gray-600">info@theguttercompany.com</p>
              </div>

              <div className="bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                <p className="text-gray-600">Saturday: 9am - 4pm</p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
                <p className="text-gray-600">
                  Have questions about our services? Need a quote? Fill out the form and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#4F46E5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#4F46E5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Quick Response Time</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#4F46E5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v11.25A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25V6h-.75a.75.75 0 01-.75-.75V4.5m-8.25 0v-.75a.75.75 0 011.5 0v.75m0 0H9m3 0h3" />
                    </svg>
                    <span>Free Estimates</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-lg inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Chat with us
                </div>
              </div>

              <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 outline-none transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 outline-none transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 outline-none transition-all"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-3 rounded-lg hover:from-[#4338CA] hover:to-[#6D28D9] transition-all duration-300 shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-to-r from-[#4F46E5]/10 to-[#7C3AED]/10">
          <div className="container mx-auto px-5 lg:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
              <p className="text-gray-600">Serving the entire Twin Cities Metro area</p>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d90834.65132723503!2d-93.27288814999999!3d44.97034235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1709764005045!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 
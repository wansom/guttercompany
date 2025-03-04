export default function About() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Copy the navigation code from Home page here */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        {/* ... same navigation code as in home page ... */}
      </nav>

      <main className="container mx-auto py-20 px-5 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About The Gutter Company</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                The Gutter Company has been serving the Minneapolis area for over a decade, providing top-quality gutter services to homeowners and businesses alike. Our commitment to excellence and customer satisfaction has made us the trusted choice for all gutter-related needs.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experienced professionals is dedicated to ensuring your home is protected from water damage through expert gutter installation, maintenance, and repair services.
              </p>
              <div className="bg-gradient-to-br from-[#4F46E5]/5 to-[#7C3AED]/5 p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide exceptional gutter services that protect homes and businesses while delivering outstanding customer service and professional results.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img src="/about-team.jpg" alt="Our Team" className="rounded-xl shadow-lg w-full"/>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-xl mb-2">10+ Years</h3>
                  <p className="text-gray-600">Of Experience</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-xl mb-2">1000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
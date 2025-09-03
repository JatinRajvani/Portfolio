export default function ContactMe() {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#FDC700]">Get In Touch</h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            Reach out through any of the channels below, or send me a message directly using the contact form.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#FDC700] mb-6 text-center">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:border-[#FDC700] transition">
              <h3 className="text-lg font-semibold text-[#FDC700] mb-2">📍 Address</h3>
              <p className="text-gray-300 text-sm">
                123 Your Street, Your City <br /> Country - 000000
              </p>
            </div>
            <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:border-[#FDC700] transition">
              <h3 className="text-lg font-semibold text-[#FDC700] mb-2">📧 Email</h3>
              <p className="text-gray-300 text-sm">yourmail@example.com</p>
            </div>
            <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:border-[#FDC700] transition">
              <h3 className="text-lg font-semibold text-[#FDC700] mb-2">📞 Call Me</h3>
              <p className="text-gray-300 text-sm">+91 9876543210</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-12">
        
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Form */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#FDC700] mb-6 text-center">Contact Form</h2>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-[#FDC700] outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-[#FDC700] outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-[#FDC700] outline-none"
                ></textarea>
                <button className="w-full py-3 bg-[#FDC700] text-black font-semibold rounded-md hover:bg-yellow-400 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map / Location Section */}
            <div>
              <h2 className="text-xl font-bold text-[#FDC700] mb-4 text-center">Location</h2>
              <div className="w-full h-[450px] rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                <iframe
                title="Location Map"
                 src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3677.6085882760253!2d72.47120607476417!3d22.81696292397083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ5JzAxLjEiTiA3MsKwMjgnMjUuNiJF!5e0!3m2!1sen!2sin!4v1756661926227!5m2!1sen!2sin"
                 width="100%"
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

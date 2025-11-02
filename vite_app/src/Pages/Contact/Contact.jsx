import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error("Email send failed:", error);
        alert("❌ Failed to send message. Please try again later.");
      }
    );
};


  return (
    <section className="text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FDC700]">
            Get In Touch
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Reach out through any of
            the channels below, or send me a message directly using the contact form.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#FDC700] mb-6 text-center">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "📍 Address", info: "123 Your Street, Your City, Country - 000000" },
              { title: "📧 Email", info: "yourmail@example.com" },
              { title: "📞 Call Me", info: "+91 9876543210" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:border-[#FDC700] transition-all"
              >
                <h3 className="text-lg font-semibold text-[#FDC700] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.info}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#FDC700] mb-6 text-center">
            Connect With Me
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "LinkedIn",
                link: "https://linkedin.com/in/jatinrajvani",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
              },
              {
                name: "X (Twitter)",
                link: "https://x.com/yourprofile",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/X_logo_2023.svg",
              },
              {
                name: "GitHub",
                link: "https://github.com/jatinrajvani",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
            ].map((social, i) => (
              <div
                key={i}
                className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center hover:border-[#FDC700] transition-all"
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className={`w-10 h-10 ${social.name === "X (Twitter)" ? "invert" : ""}`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#FDC700] mb-2">
                  {social.name}
                </h3>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-[#FDC700] transition-all"
                >
                  {social.link.replace("https://", "")}
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Form + Map Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-700 shadow-lg">
              <h2 className="text-2xl font-bold text-[#FDC700] mb-6 text-center">
                Contact Form
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <input type="hidden" name="to_name" value="Jatin" />

                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-[#FDC700] outline-none text-sm sm:text-base"
                  required
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-[#FDC700] outline-none text-sm sm:text-base"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-gray-200 focus:ring-2 focus:ring-[#FDC700] outline-none text-sm sm:text-base resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FDC700] text-black font-semibold rounded-md hover:bg-yellow-400 transition text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#FDC700] mb-4 text-center">
                Location
              </h2>
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3677.6085882760253!2d72.47120607476417!3d22.81696292397083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ5JzAxLjEiTiA3MsKwMjgnMjUuNiJF!5e0!3m2!1sen!2sin!4v1756661926227!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

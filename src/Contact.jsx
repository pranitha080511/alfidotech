export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-24"
    >
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-sky-400 mb-16 drop-shadow-[0_0_28px_rgba(125,211,252,0.9)]">
        Contact Me
      </h2>

      {/* Contact Box */}
      <form
        action="https://formsubmit.co/pranisaravanan2005@gmail.com"
        method="POST"
        className="max-w-xl mx-auto border border-sky-400/40 rounded-2xl p-8 space-y-6 bg-black/40 backdrop-blur-md"
      >
        {/* 🔐 Hidden settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Portfolio Message!" />
        <input type="hidden" name="_template" value="table" />

        {/* Name */}
        <div>
          <label className="block mb-2 text-sky-300">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black border border-sky-400/40 rounded-lg outline-none focus:border-sky-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sky-300">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-black border border-sky-400/40 rounded-lg outline-none focus:border-sky-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sky-300">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Write your message..."
            className="w-full px-4 py-3 bg-black border border-sky-400/40 rounded-lg outline-none focus:border-sky-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 border border-sky-400 rounded-lg text-sky-300 hover:bg-sky-400 hover:text-black transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

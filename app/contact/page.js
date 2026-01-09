export default function ContactPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <div className="card-2 max-w-lg w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-zinc-800 dark:text-zinc-100">
          Contact Us
        </h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:bg-zinc-800 dark:border-zinc-600 dark:text-white dark:placeholder-zinc-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:bg-zinc-800 dark:border-zinc-600 dark:text-white dark:placeholder-zinc-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us how we can help or share your favorite jeepney story or collab with us in a future project!"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:bg-zinc-800 dark:border-zinc-600 dark:text-white dark:placeholder-zinc-400 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-zinc-800 transition-colors duration-300 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-8">
          Looking forward to hearing from you! Ride Safe Dabawenyos!
        </p>
      </div>
    </section>
  );
}
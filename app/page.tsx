export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Our Awesome Product</h1>
        <p className="text-xl mb-8 text-white">Join our waitlist to be the first to know when we launch!</p>
        
        <form className="flex flex-col items-center gap-4 mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-opacity-90 transition-colors"
          >
            Join Waitlist
          </button>
        </form>

        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:underline">About Us</a>
          <a href="#" className="text-white hover:underline">Contact</a>
          <a href="#" className="text-white hover:underline">Privacy Policy</a>
        </div>
      </main>
    </div>
  );
}

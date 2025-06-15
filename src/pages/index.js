import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white font-sans">
      {/* Navbar */}
      <header className="bg-green-700 text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🌱 Mitti Mithra</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-green-300">Home</Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-green-300">Ask AI</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Your AI Companion for Farming Solutions
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Mitti Mithra helps farmers with expert advice on papaya and banana cultivation, seasonal tips, and more — powered by OpenAI.
        </p>

        {/* 🌟 Here's the Ask a Question button */}
        <div className="mt-8">
          <Link href="/chat">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg transition-all">
              Ask a Question
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-6 border-t mt-12">
        © 2025 Mitti Mithra. Made with ❤️ for Indian farmers.
      </footer>
    </div>
  );
}

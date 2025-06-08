import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-800 mb-6">🌱 Welcome to Mitti Mithra</h1>
        <p className="text-gray-700 mb-8">
          Supporting farmers with high-quality papaya and banana seedlings. Grow with us!
        </p>

        <div className="space-x-4">
          <Link href="/contact">
            <a className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Contact Us
            </a>
          </Link>
          <Link href="/about">
            <a className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
              About Mitti Mithra
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

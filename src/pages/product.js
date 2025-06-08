import Head from 'next/head';

export default function Product() {
  return (
    <>
      <Head>
        <title>Our Products | Mitti Mithra</title>
      </Head>
      <main className="min-h-screen bg-green-50 p-8 flex items-center justify-center">
        <div className="max-w-4xl bg-white p-10 rounded-lg shadow-lg text-gray-800">
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Our Eco-Friendly Products</h1>
          <p className="mb-8 text-lg text-center">
            At <strong className="text-green-800">Mitti Mithra</strong>, we offer a range of sustainable, earth-loving products
            designed to help you live greener and support healthy soil.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">🌱 Organic Compost Kits</h2>
            <p className="text-lg">
              Turn your kitchen waste into black gold! Our compost kits are easy to use, odor-free, and perfect
              for home gardeners and apartment dwellers alike.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">🪴 Plantable Seed Pens & Papers</h2>
            <p className="text-lg">
              Write, plant, and grow! Our seed-based stationery is eco-friendly and biodegradable — a great gift
              with a purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">🌾 Organic Fertilizers</h2>
            <p className="text-lg">
              100% natural, chemical-free fertilizers made from vermicompost and plant waste to enrich your soil
              and boost crop yield the natural way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-600 mb-2">🛒 Coming Soon!</h2>
            <p className="text-lg">
              Stay tuned as we launch more eco-products and kits to help you build a greener world. Your support
              nurtures not just the soil, but the soul of the planet.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

import Head from 'next/head';

export default function Product() {
  return (
    <>
      <Head>
        <title>Our Products | Mitti Mithra</title>
      </Head>
      <main>
        <h1>Our Eco-Friendly Products</h1>
        <p>
          At <strong>Mitti Mithra</strong>, we offer a range of sustainable, earth-loving products designed to help you live greener and support healthy soil.
        </p>

        <section >
          <h2>🌱 Organic Compost Kits</h2>
          <p>
            Turn your kitchen waste into black gold! Our compost kits are easy to use, odor-free, and perfect for home gardeners and apartment dwellers alike.
          </p>
        </section>

        <section >
          <h2>🪴 Plantable Seed Pens & Papers</h2>
          <p>
            Write, plant, and grow! Our seed-based stationery is eco-friendly and biodegradable — a great gift with a purpose.
          </p>
        </section>

        <section >
          <h2>🌾 Organic Fertilizers</h2>
          <p>
            100% natural, chemical-free fertilizers made from vermicompost and plant waste to enrich your soil and boost crop yield the natural way.
          </p>
        </section>

        <section >
          <h2>🛒 Coming Soon!</h2>
          <p>
            Stay tuned as we launch more eco-products and kits to help you build a greener world. Your support nurtures not just the soil, but the soul of the planet.
          </p>
        </section>
      </main>
    </>
  );
}

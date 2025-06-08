import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Mitti Mithra</title>
      </Head>
      <main className="min-h-screen bg-green-50 p-8 flex items-center justify-center">
        <div className="max-w-3xl bg-white p-10 rounded-lg shadow-lg text-gray-800">
          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">About Mitti Mithra</h1>
          <p className="mb-4 text-lg">
            <strong className="text-green-800">Mitti Mithra</strong> is a community-driven initiative focused on promoting sustainable agricultural practices, soil health, and environmental awareness.
          </p>
          <p className="mb-4 text-lg">
            Our mission is to reconnect people with the earth by encouraging organic farming, composting, and eco-conscious living.
            We believe in nurturing not just the soil, but the bond between nature and society.
          </p>
          <p className="mb-4 text-lg">
            Through educational workshops, digital tools, and grassroots campaigns, Mitti Mithra empowers farmers, students, and urban communities to become guardians of the environment.
          </p>
          <p className="text-lg font-medium text-green-600">
            Together, let's protect our planet — one handful of soil at a time 🌱
          </p>
        </div>
      </main>
    </>
  );
}

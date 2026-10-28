export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold">Barbershop Name</h1>
      <p className="text-lg text-gray-600">Classic cuts. Friendly faces.</p>

      <div className="flex gap-4">
        <a href="/contact" className="rounded bg-black px-6 py-3 text-white">
          Book Now
        </a>
        <a href="/services" className="rounded border px-6 py-3">
          Our Services
        </a>
      </div>
    </main>
  );
}
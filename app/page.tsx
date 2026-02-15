export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative min-h-screen">
        {/* Full-bleed grid of cat photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <img src="/cat-hero.jpg" alt="Cute cat photo" className="w-full h-64 object-cover rounded-lg" />
          <img src="/cat-bg1.jpg" alt="Cute cat photo" className="w-full h-64 object-cover rounded-lg" />
          <img src="/cat-bg2.jpg" alt="Cute cat photo" className="w-full h-64 object-cover rounded-lg" />
          <img src="/cat-bg3.jpg" alt="Cute cat photo" className="w-full h-64 object-cover rounded-lg" />
          <img src="/cat-icon1.jpg" alt="Cute cat photo" className="w-full h-64 object-cover rounded-lg" />
          <img src="/cat-icon2.jpg" alt="Cute cat photo" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </main>
    </div>
  );
}

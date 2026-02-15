export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
        {/* Stanford Tree */}
        <div className="mb-8 text-8xl">
          🌲
        </div>

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <h1 className="text-7xl font-bold text-white mb-2 tracking-tighter">
            Tree
            <span className="text-red-500">Hacks</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 leading-relaxed">
            Stanford's premier hackathon. Where innovation grows. Build, innovate, and connect with the brightest minds.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-red-500/50 transition">
            <p className="text-3xl mb-2">🚀</p>
            <p className="font-semibold text-white mb-2">Build</p>
            <p className="text-slate-400 text-sm">Create amazing projects in 48 hours with 1000+ hackers</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-red-500/50 transition">
            <p className="text-3xl mb-2">🤝</p>
            <p className="font-semibold text-white mb-2">Connect</p>
            <p className="text-slate-400 text-sm">Network with talented engineers and visionary mentors</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-red-500/50 transition">
            <p className="text-3xl mb-2">🏆</p>
            <p className="font-semibold text-white mb-2">Win</p>
            <p className="text-slate-400 text-sm">Compete for prizes and showcase your innovations</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mb-16 text-center">
          <div>
            <p className="text-5xl font-bold text-red-500">1000+</p>
            <p className="text-slate-400 mt-2">Hackers</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-red-500">48hrs</p>
            <p className="text-slate-400 mt-2">of Hacking</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://treehacks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-10 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition duration-200"
          >
            Learn More
          </a>
          <a
            href="mailto:team@treehacks.com"
            className="border-2 border-red-500/30 text-red-400 px-10 py-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-300 hover:bg-red-500/10 transition duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Spinning Trees */}
        <div className="absolute top-10 left-10">
          <div className="tree">
            <div className="trunk"></div>
            <div className="foliage"></div>
          </div>
        </div>
        <div className="absolute top-20 right-20">
          <div className="tree">
            <div className="trunk"></div>
            <div className="foliage"></div>
          </div>
        </div>
        <div className="absolute bottom-20 left-20">
          <div className="tree">
            <div className="trunk"></div>
            <div className="foliage"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

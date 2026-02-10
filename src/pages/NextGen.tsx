import { Link } from 'react-router-dom';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { NextGenDetail } from '../components/NextGenDetail';

export function NextGenPage() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-white overflow-x-hidden">
      <AnimatedBackground />
      <header className="sticky top-0 z-50 bg-[#0a0118]/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-purple-300 hover:text-purple-200 transition-colors"
          >
            ← Back to portfolio
          </Link>
          <span className="text-sm text-gray-400">Project Detail</span>
        </div>
      </header>
      <main>
        <NextGenDetail />
      </main>
    </div>
  );
}

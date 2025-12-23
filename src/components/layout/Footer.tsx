export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">New Horizons Lab</h3>
            <p className="text-gray-400 text-md leading-relaxed">
              Exploring the universe through gravitational waves, quantum optics, and precision measurements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-md">
              <li>McCook 215 & McCook 109</li>
              <li>Physics Department</li>
              <li>Trinity College</li>
              <li>Hartford, CT</li>
              <li>(860) 297-5316</li>
              <li><a href="mailto:eyal.schwartz@trincoll.edu">eyal.schwartz@trincoll.edu</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Research Areas</h3>
            <ul className="space-y-2 text-gray-400 text-md">
              <li>Gravitational Waves</li>
              <li>Quantum Optics</li>
              <li>Ultra-cold Atoms</li>
              <li>Physics & Neuroscience</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} New Horizons Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


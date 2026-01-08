import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RooftopSolutionPage() {
  return (
    <main className="bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] text-neutral-400 mb-8 uppercase font-light">
            SOLUTION
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight">
            ONEHO Rooftop PV Solution
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 font-light mb-6 max-w-3xl mx-auto">
            A high-performance rooftop solar solution designed for maximum energy yield and long-term reliability.
          </p>

          <p className="text-sm md:text-base text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
            A system-level architecture combining rooftop PV modules, microinverter-based conversion, and intelligent monitoring to maximize rooftop solar performance.
          </p>

          <Button
            variant="outline"
            className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
          >
            Download Solution Brief
          </Button>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-neutral-500 mb-6 uppercase font-light">
            SYSTEM OVERVIEW
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-20 tracking-tight max-w-3xl">
            Designed to extract maximum value from rooftops
          </h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="relative aspect-square bg-neutral-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-neutral-600 text-sm">Rooftop PV System Diagram</div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl text-white font-light mb-3">Peak efficiency up to 98%</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  High-efficiency energy conversion designed for rooftop PV systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white font-light mb-3">Total energy yield increased by 5%–30%</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Module-level optimization improves overall system output under real rooftop conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white font-light mb-3">No derating at 65°C</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Stable operation maintained even under high rooftop temperatures.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white font-light mb-3">Low-light power generation</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Enables earlier start and later stop, extending daily generation time by up to 3 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-xs tracking-[0.25em] text-neutral-500 mb-6 uppercase font-light">
            SAFETY
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-tight">
            Electrical safety built into the architecture
          </h2>

          <p className="text-xl text-neutral-400 font-light mb-20 max-w-3xl mx-auto">
            Rooftop safety is ensured through low-voltage design, continuous monitoring, and intelligent protection mechanisms.
          </p>

          <div className="max-w-2xl mx-auto space-y-12 text-left">
            <div>
              <h3 className="text-xl text-white font-light mb-3">≤60V low-voltage DC design</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Reduces high-voltage risk at the module level.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-light mb-3">Rapid shutdown capability</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Meets rooftop fire and emergency safety requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-light mb-3">24/7 module-level monitoring</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Real-time detection of abnormal behavior.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-light mb-3">Encrypted data communication</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Secure transmission between devices and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-neutral-500 mb-6 uppercase font-light">
            ARCHITECTURE
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-20 tracking-tight max-w-3xl">
            Why this rooftop system works
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <h3 className="text-2xl text-white font-light mb-6">Performance optimization</h3>
              <ul className="space-y-4 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>98% peak conversion efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Module-level energy optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Improved yield under shading and uneven conditions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-white font-light mb-6">Lightweight & scalable</h3>
              <ul className="space-y-4 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Ultra-lightweight unit: 1.48 kg</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Modular system design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Easy system expansion as energy demand grows</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-white font-light mb-6">Long-term stability</h3>
              <ul className="space-y-4 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Designed for outdoor rooftop environments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Stable performance across seasons</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Low failure rate ensures continuous operation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-neutral-500 mb-6 uppercase font-light">
            RELIABILITY
          </div>

          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
              Engineered for long-term rooftop operation
            </h2>
            <p className="text-xl text-neutral-400 font-light">
              Built to deliver stable power over decades of real-world rooftop use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="border-l border-neutral-800 pl-6">
              <div className="text-2xl md:text-3xl text-white font-light mb-3">IP67 protection</div>
              <p className="text-neutral-400 font-light text-sm">Weather-resistant enclosure for harsh environments</p>
            </div>

            <div className="border-l border-neutral-800 pl-6">
              <div className="text-2xl md:text-3xl text-white font-light mb-3">25-year warranty</div>
              <p className="text-neutral-400 font-light text-sm">Long-term system reliability assurance</p>
            </div>

            <div className="border-l border-neutral-800 pl-6">
              <div className="text-2xl md:text-3xl text-white font-light mb-3">≤500 ppm failure rate</div>
              <p className="text-neutral-400 font-light text-sm">High manufacturing quality and reliability</p>
            </div>

            <div className="border-l border-neutral-800 pl-6">
              <div className="text-2xl md:text-3xl text-white font-light mb-3">Stable long-term output</div>
              <p className="text-neutral-400 font-light text-sm">Consistent performance across temperature extremes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-xs tracking-[0.25em] text-neutral-500 mb-6 uppercase font-light">
            OPERATIONS
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-20 tracking-tight max-w-3xl">
            Smart monitoring and intelligent control
          </h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h3 className="text-2xl text-white font-light mb-8">Connectivity & communication</h3>
              <ul className="space-y-6 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>PLC communication technology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Long-distance signal transmission</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Strong anti-interference capability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Independent module communication</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-white font-light mb-8">Intelligent operation & maintenance</h3>
              <ul className="space-y-6 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Smart zero-export (power limiting) control</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Module-level real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Remote commissioning and configuration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Remote firmware upgrade</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>AI-assisted fault diagnosis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Faster issue response and reduced O&M cost</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.25em] text-neutral-500 mb-6 uppercase font-light">
            TARGET APPLICATIONS
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-tight">
            Who This Solution Is For
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left max-w-2xl mx-auto">
            <ul className="space-y-4 text-neutral-400 font-light">
              <li className="flex items-start">
                <span className="mr-3 text-neutral-600">—</span>
                <span>Residential rooftop PV projects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-neutral-600">—</span>
                <span>Distributed rooftop installations</span>
              </li>
            </ul>
            <ul className="space-y-4 text-neutral-400 font-light">
              <li className="flex items-start">
                <span className="mr-3 text-neutral-600">—</span>
                <span>Professional installers and integrators</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-neutral-600">—</span>
                <span>Long-term system operators</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support">
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-neutral-200 px-8 py-6 text-base"
              >
                Contact ONEHO
              </Button>
            </Link>
            <Button
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
            >
              Download Full Technical Documentation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

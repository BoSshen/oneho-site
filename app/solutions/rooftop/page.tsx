import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RooftopSolutionPage() {
  return (
    <main className="bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        >
          <source src="/屋顶solution.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.3em] text-neutral-400 mb-8 uppercase font-light">
            SOLUTION
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight">
            ONEHO Rooftop PV Solution
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 font-light mb-6 max-w-3xl mx-auto">
            A complete rooftop solar solution designed for residential and small commercial rooftops.
          </p>

          <p className="text-sm md:text-base text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
            A system-level architecture combining rooftop PV modules, distributed conversion, and intelligent monitoring — engineered for real-world rooftop conditions.
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
              <img
                src="/6.png"
                alt="Rooftop PV System"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl text-white font-light mb-3">Module-level optimization</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Each module operates independently, reducing energy loss caused by shading, orientation differences, and uneven rooftop layouts.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white font-light mb-3">Distributed AC architecture</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Power conversion occurs directly at the module level, simplifying system design and improving adaptability to complex rooftop environments.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white font-light mb-3">Integrated system monitoring</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Built-in visibility enables both installers and system owners to understand system status and performance from day one.
                </p>
              </div>

              <div>
                <h3 className="text-xl text-white font-light mb-3">Rooftop-oriented design</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  The system is designed to operate reliably across varying rooftop geometries, materials, and installation conditions.
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
            Rooftop safety is ensured through low-voltage system design, continuous monitoring, and intelligent protection mechanisms.
          </p>

          <div className="max-w-2xl mx-auto space-y-12 text-left">
            <div>
              <h3 className="text-xl text-white font-light mb-3">Low-voltage module-level design</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Reduces electrical risk at the source by limiting DC voltage at the module level.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-light mb-3">Rapid shutdown capability</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Enables fast system shutdown to support rooftop fire safety and emergency response requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-light mb-3">Continuous system monitoring</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Abnormal behavior can be detected in real time, improving operational awareness and system protection.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white font-light mb-3">Secure data communication</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Encrypted data transmission ensures safe communication between devices and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-black">
        <div className="w-full">
          <img
            src="/7.png"
            alt="Secure data communication"
            className="w-full h-auto"
          />
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
                  <span>Module-level energy optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Reduced mismatch losses across the array</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Improved output consistency under partial shading and uneven conditions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-white font-light mb-6">Lightweight & scalable</h3>
              <ul className="space-y-4 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Distributed system layout with no single point of failure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Modular design allows flexible system sizing</span>
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
                  <span>Designed for continuous outdoor rooftop operation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Stable performance across seasons and temperature variations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Architecture optimized for long service life</span>
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
              <div className="text-2xl md:text-3xl text-white font-light mb-3">Long system lifetime</div>
              <p className="text-neutral-400 font-light text-sm">System architecture designed for long-term operation in rooftop environments</p>
            </div>

            <div className="border-l border-neutral-800 pl-6">
              <div className="text-2xl md:text-3xl text-white font-light mb-3">Weather-resistant design</div>
              <p className="text-neutral-400 font-light text-sm">Outdoor-rated enclosures suitable for long-term exposure to sun, rain, and temperature variation</p>
            </div>

            <div className="border-l border-neutral-800 pl-6">
              <div className="text-2xl md:text-3xl text-white font-light mb-3">Stable operation</div>
              <p className="text-neutral-400 font-light text-sm">Consistent system behavior across seasonal and environmental changes</p>
            </div>

            <div className="border-l border-neutral-800 pl-6">
              <div className="text-2xl md:text-3xl text-white font-light mb-3">Field-proven architecture</div>
              <p className="text-neutral-400 font-light text-sm">Validated through real residential and commercial rooftop deployments</p>
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
            Operational visibility built into the solution
          </h2>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h3 className="text-2xl text-white font-light mb-8">Installer View</h3>
              <ul className="space-y-6 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Remote system commissioning support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Ongoing system health monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Performance diagnostics and issue identification</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-white font-light mb-8">End User View</h3>
              <ul className="space-y-6 text-neutral-400 font-light">
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Simple mobile access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Real-time energy generation visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-neutral-600">—</span>
                  <span>Long-term energy savings tracking</span>
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

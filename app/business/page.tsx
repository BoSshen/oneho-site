'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Shield, Monitor, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BusinessPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    role: '',
    monthlyVolume: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-xs tracking-[0.2em] text-gray-400 mb-6">
            FOR SOLAR PROFESSIONALS
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Empowering Solar Professionals.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Fast installation, advanced monitoring, and reliable margins.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black hover:bg-gray-100 text-base px-8 py-6 rounded-full"
          >
            Become a Partner
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] text-gray-400 mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Built for Your Success
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Industry-leading technology designed to maximize your efficiency and profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">Faster Install</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Plug-and-play design saves 40% labor time
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                Streamlined installation process reduces on-site time and labor costs. Simple DC connections and wireless monitoring setup means your crew moves faster.
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white">Low Voltage Safety</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  No high-voltage DC risks for your crew
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                Each panel operates independently at safe voltages. Eliminates dangerous DC arc flash hazards and reduces insurance costs.
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white">Fleet Management</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Monitor all client sites from one dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                Real-time monitoring and diagnostics for every installation. Proactive alerts and remote troubleshooting reduce service calls.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] text-gray-400 mb-4">
              TECHNICAL SPECIFICATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Enterprise-Grade Performance
            </h2>
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Specification</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Value</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-4 px-6 text-gray-300">Peak Output Power</td>
                    <td className="py-4 px-6 text-white font-medium">300W - 500W</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">Per microinverter unit</td>
                  </tr>
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-4 px-6 text-gray-300">Peak Efficiency</td>
                    <td className="py-4 px-6 text-white font-medium">97.5%</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">CEC weighted efficiency</td>
                  </tr>
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-4 px-6 text-gray-300">Output Voltage</td>
                    <td className="py-4 px-6 text-white font-medium">230V AC</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">Grid-tied configuration</td>
                  </tr>
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-4 px-6 text-gray-300">Warranty</td>
                    <td className="py-4 px-6 text-white font-medium">25 Years</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">Full replacement coverage</td>
                  </tr>
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-4 px-6 text-gray-300">Operating Temperature</td>
                    <td className="py-4 px-6 text-white font-medium">-40°C to +65°C</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">Rated performance range</td>
                  </tr>
                  <tr className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-4 px-6 text-gray-300">Certifications</td>
                    <td className="py-4 px-6 text-white font-medium">IEC, UL, CE</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">Global compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-800/30 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Technical Resources</h3>
                  <p className="text-sm text-gray-400">Download detailed datasheets and installation guides</p>
                </div>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner-form" className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.2em] text-gray-400 mb-4">
              GET STARTED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Become a Partner
            </h2>
            <p className="text-lg text-gray-400">
              Join our network of certified installers and distributors
            </p>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-white">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    required
                    placeholder="Enter your company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Business Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-white">
                    Role *
                  </Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="installer" className="text-white hover:bg-gray-700">
                        Solar Installer
                      </SelectItem>
                      <SelectItem value="distributor" className="text-white hover:bg-gray-700">
                        Distributor
                      </SelectItem>
                      <SelectItem value="epc" className="text-white hover:bg-gray-700">
                        EPC Contractor
                      </SelectItem>
                      <SelectItem value="developer" className="text-white hover:bg-gray-700">
                        Project Developer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthlyVolume" className="text-white">
                    Estimated Monthly Volume
                  </Label>
                  <Select
                    value={formData.monthlyVolume}
                    onValueChange={(value) => setFormData({ ...formData, monthlyVolume: value })}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select estimated volume" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="1-10" className="text-white hover:bg-gray-700">
                        1-10 systems/month
                      </SelectItem>
                      <SelectItem value="11-50" className="text-white hover:bg-gray-700">
                        11-50 systems/month
                      </SelectItem>
                      <SelectItem value="51-100" className="text-white hover:bg-gray-700">
                        51-100 systems/month
                      </SelectItem>
                      <SelectItem value="100+" className="text-white hover:bg-gray-700">
                        100+ systems/month
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 py-6 text-lg font-medium rounded-full"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-center text-gray-500">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to get started?</h3>
              <p className="text-gray-400">Contact our business development team for more information.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800 rounded-full px-6">
                Contact Sales
              </Button>
              <Button asChild className="bg-white text-black hover:bg-gray-100 rounded-full px-6">
                <Link href="/shop">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, UtensilsCrossed, GraduationCap, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { trustInfo, programs, stats } from '../mock';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const iconMap = {
    Users,
    UtensilsCrossed,
    GraduationCap,
    Heart
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580869318757-a6c605b061ed"
            alt="Helping hands"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/90 to-emerald-700/85" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-3xl">
            <div
              className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
              }>

              <h1 className="!font-sans !font-bold !text-5xl !text-left !mb-[24px] text-white">
                Spreading Hope<br />
                <span className="text-emerald-300">Where It's Needed Most</span>
              </h1>
              <p className="!text-2xl !text-left !mb-[32px] text-emerald-50">
                Every act of kindness creates ripples of hope. Join us in making a difference in the lives of those who need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate">
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold group">
                    Donate Now
                    <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-6 text-lg font-semibold group">
                    Our Programs
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-emerald-600 rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = iconMap[stat.icon];
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-10 w-10 text-emerald-200 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-emerald-100 font-medium">{stat.label}</div>
                  </div>);

              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {trustInfo.mission}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since {trustInfo.established}, we've been committed to creating positive change through compassionate action and community support.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559234938-b60fff04894d"
                  alt="Community support"
                  className="w-full h-[400px] object-cover" />

              </div>
              <div className="absolute -bottom-6 -left-6 !mx-[12px] !py-[20px] !px-[20px] rounded-xl shadow-lg text-white bg-emerald-600">
                <div className="text-3xl font-bold">{trustInfo.beneficiaries}</div>
                <div className="text-emerald-100">Lives Touched</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in holistic support - addressing immediate needs while creating pathways to sustainable futures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.slice(0, 3).map((program) =>
            <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center text-emerald-600 font-semibold text-sm">
                    <Heart className="h-4 w-4 mr-2" fill="currentColor" />
                    {program.impact}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="text-center">
            <Link to="/programs">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 group">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Make a Difference Today
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Your contribution, no matter how small, creates waves of positive change. Join us in spreading hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold">
                  Donate Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 hover:bg-emerald-50 text-lg font-semibold gap-2 px-8 py-6 rounded-md !shadow-md bg-white text-emerald-700">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>);

};
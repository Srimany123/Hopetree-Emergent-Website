import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Heart, GraduationCap, Laptop, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { programs } from '../mock';

export const Programs = () => {
  const iconMap = {
    UtensilsCrossed,
    Heart,
    GraduationCap,
    Laptop,
    Users
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Comprehensive initiatives designed to create lasting impact across communities. Each program addresses critical needs with compassion and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = iconMap[program.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={program.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 text-white">
                          <div className="bg-emerald-600 p-3 rounded-lg">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="text-sm text-emerald-200 font-medium">Impact</div>
                            <div className="text-lg font-bold">{program.impact}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <Card className="border-none shadow-lg bg-white">
                      <CardContent className="p-8">
                        <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                          <Icon className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          {program.title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {program.description}
                        </p>
                        <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                          <div className="flex items-center gap-2 text-emerald-700">
                            <Heart className="h-5 w-5" fill="currentColor" />
                            <span className="font-semibold">{program.impact}</span>
                          </div>
                        </div>
                        <div className="space-y-3 text-gray-600 mb-6">
                          {program.id === 1 && (
                            <>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Daily meal delivery to elderly individuals living alone</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Nutritious, home-cooked meals prepared with care</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Regular wellness checks and companionship</p>
                              </div>
                            </>
                          )}
                          {program.id === 2 && (
                            <>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Free distribution of essential and life-saving medicines</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Partnerships with pharmacies and healthcare providers</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Medical consultations and health awareness programs</p>
                              </div>
                            </>
                          )}
                          {program.id === 3 && (
                            <>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Full or partial sponsorship of school fees and supplies</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Tutoring and mentorship programs</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Career guidance and skill development workshops</p>
                              </div>
                            </>
                          )}
                          {program.id === 4 && (
                            <>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Donation of refurbished laptops and desktops</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Digital literacy training and support</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Internet access facilitation for underprivileged students</p>
                              </div>
                            </>
                          )}
                          {program.id === 5 && (
                            <>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Financial assistance for weddings and ceremonies</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Emergency support for families in crisis</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="bg-emerald-600 h-2 w-2 rounded-full mt-2 flex-shrink-0" />
                                <p>Livelihood support and skill training programs</p>
                              </div>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
              <p className="text-xl text-gray-600">
                Your support makes these programs possible. Here's how you can contribute:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Donate',
                  description: 'Financial contributions directly fund our programs',
                  action: 'Make a Donation',
                  link: '/donate'
                },
                {
                  title: 'Volunteer',
                  description: 'Share your time and skills with our community',
                  action: 'Get Involved',
                  link: '/contact'
                },
                {
                  title: 'Spread Awareness',
                  description: 'Help us reach more people who need support',
                  action: 'Contact Us',
                  link: '/contact'
                }
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-emerald-300">
                  <CardContent className="p-6">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-emerald-600" fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link to={item.link}>
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 group">
                        {item.action}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Your contribution today will directly support these life-changing programs.
            </p>
            <Link to="/donate">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold group">
                Support Our Programs
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

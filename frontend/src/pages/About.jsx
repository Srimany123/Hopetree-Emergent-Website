import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Target, Eye, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { trustInfo, teamMembers } from '../mock';

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-emerald-600">Hopetree</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {trustInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {trustInfo.mission}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {trustInfo.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7551675/pexels-photo-7551675.jpeg"
                alt="Our story"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">Est. {trustInfo.established}</div>
                <div className="text-emerald-100 text-lg">Years of Service</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Hopetree Charitable Trust was founded in {trustInfo.established} with a simple yet powerful vision: to ensure that no one in our community is left behind.
                </p>
                <p>
                  What started as a small initiative to feed a few elderly individuals has grown into a comprehensive support system that touches thousands of lives every year.
                </p>
                <p>
                  We believe that every person deserves dignity, care, and opportunity. Through our diverse programs, we work tirelessly to bridge gaps in our society - whether it's ensuring the elderly don't go hungry, children have access to education, or families receive support during challenging times.
                </p>
                <p>
                  Today, with the support of over {trustInfo.volunteers} dedicated volunteers and generous donors, we continue to spread hope where it's needed most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">Principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Compassion',
                description: 'We lead with empathy and understanding in all our interactions',
                icon: '❤️'
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency and accountability',
                icon: '🤝'
              },
              {
                title: 'Community',
                description: 'We believe in the power of collective action',
                icon: '🌟'
              },
              {
                title: 'Impact',
                description: 'We measure success by the lives we transform',
                icon: '📈'
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-emerald-300">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Dedicated individuals driving positive change</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>
                <CardContent className="p-6 -mt-16 relative z-10">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-medium">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Whether through donations, volunteering, or spreading awareness - every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold group">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-6 text-lg font-semibold group">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { contactInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img
                src="https://customer-assets.emergentagent.com/job_charity-trust-hub/artifacts/y2qkrgjt_Hopetree%20logo.png"
                alt="Hopetree Charitable Trust"
                className="h-28 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Spreading hope where it's needed the most. Join us in making a difference.
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm hover:text-emerald-400 transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-emerald-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Feed the Elderly</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Essential Medicines</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Education Sponsorship</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Digital Bridge</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Family Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-emerald-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-emerald-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Hopetree Charitable Trust. All rights reserved. Built with{' '}
            <Heart className="inline h-4 w-4 text-red-500" fill="currentColor" /> for a better world.
          </p>
        </div>
      </div>
    </footer>
  );
};

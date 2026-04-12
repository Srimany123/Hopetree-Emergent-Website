import React, { useState } from 'react';
import { Heart, CheckCircle2, IndianRupee } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { donationTiers } from '../mock';

export const Donate = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTierSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value) || 0);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedAmount || selectedAmount <= 0) {
      toast({
        title: "Please select a donation amount",
        variant: "destructive"
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Store donation request in browser
    const donationData = {
      ...formData,
      amount: selectedAmount,
      date: new Date().toISOString(),
      status: 'pending'
    };

    const existingDonations = JSON.parse(localStorage.getItem('donations') || '[]');
    existingDonations.push(donationData);
    localStorage.setItem('donations', JSON.stringify(existingDonations));

    setIsSubmitted(true);
    
    toast({
      title: "Thank you for your generosity!",
      description: "We've received your donation request. Our team will contact you shortly with payment details."
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-2 border-emerald-200">
            <CardContent className="p-12 text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Support!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your donation of ₹{selectedAmount} will make a real difference in someone's life.
              </p>
              <p className="text-gray-600 mb-8">
                Our team will reach out to you at {formData.email} with payment details and next steps.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedAmount(null);
                  setCustomAmount('');
                  setFormData({ name: '', email: '', phone: '', message: '' });
                }}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              >
                Make Another Donation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6" fill="currentColor" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-emerald-100">
              Your donation directly supports our programs and changes lives. Every contribution matters.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Donation Tiers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Choose Your Contribution
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {donationTiers.map((tier) => (
                    <Card
                      key={tier.id}
                      onClick={() => tier.amount > 0 && handleTierSelect(tier.amount)}
                      className={`cursor-pointer transition-all duration-300 border-2 ${
                        selectedAmount === tier.amount && tier.amount > 0
                          ? 'border-emerald-600 shadow-lg scale-105 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
                      } ${tier.amount === 0 ? 'md:col-span-2 lg:col-span-4' : ''}`}
                    >
                      <CardContent className="p-6 text-center">
                        {tier.amount > 0 && (
                          <>
                            <div className="flex items-center justify-center mb-3">
                              <IndianRupee className="h-8 w-8 text-emerald-600" />
                              <span className="text-3xl font-bold text-gray-900">{tier.amount}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{tier.title}</h3>
                            <p className="text-sm text-gray-600">{tier.description}</p>
                          </>
                        )}
                        {tier.amount === 0 && (
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{tier.title}</h3>
                            <div className="max-w-md mx-auto">
                              <Label htmlFor="customAmount" className="text-left block mb-2">
                                Enter Amount (₹)
                              </Label>
                              <Input
                                id="customAmount"
                                type="number"
                                placeholder="Enter amount"
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                min="1"
                                className="text-lg"
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Any message for us?"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2"
                        rows={1}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-lg font-semibold group"
                >
                  Continue to Donate
                  {selectedAmount > 0 && ` ₹${selectedAmount}`}
                  <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Payment integration coming soon. We'll contact you with payment details.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Where Your Money Goes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { percentage: '85%', label: 'Direct Program Support' },
                { percentage: '10%', label: 'Operations & Admin' },
                { percentage: '5%', label: 'Fundraising' }
              ].map((item, index) => (
                <Card key={index} className="text-center border-2 border-emerald-200">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">{item.percentage}</div>
                    <div className="text-gray-700">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Home } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Reservations',
      description: 'Book your stay via email',
      contact: 'bookings@localstaysrentals.com',
      action: 'Send Inquiry',
    },
    {
      icon: Phone,
      title: 'Call Direct',
      description: 'Speak with property manager',
      contact: '+1 (555) 789-STAY',
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      description: 'Quick responses via WhatsApp',
      contact: 'Available 7AM-11PM',
      action: 'Message Us',
    },
  ];

  const properties = [
    {
      name: 'Downtown Loft',
      address: '425 Market Street, Downtown',
      type: '2BR/2BA Modern Loft',
    },
    {
      name: 'Riverside Studio',
      address: '88 Waterfront Drive, Riverside',
      type: '1BR/1BA Studio Apartment',
    },
    {
      name: 'Garden Terrace',
      address: '156 Oak Avenue, Garden District',
      type: '3BR/2BA Terrace Apartment',
    },
    {
      name: 'Historic Brownstone',
      address: '92 Heritage Lane, Old Town',
      type: '2BR/1BA Historic Unit',
    },
    {
      name: 'Skyline Penthouse',
      address: '301 Tower Plaza, City Center',
      type: '3BR/3BA Penthouse Suite',
    },
    {
      name: 'Cozy Corner',
      address: '78 Maple Street, Arts Quarter',
      type: '1BR/1BA Cozy Apartment',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Reservations & Inquiries
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Book Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Perfect Stay?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our apartments or ready to make a reservation? We're here to help
            you find the perfect local accommodation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Booking Inquiry Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Booking Inquiry
              </CardTitle>
              <CardDescription>
                Tell us about your travel dates and we'll check availability for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Preferred Property
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Any available property</option>
                    <option value="downtown-loft">Downtown Loft (2BR/2BA)</option>
                    <option value="riverside-studio">Riverside Studio (1BR/1BA)</option>
                    <option value="garden-terrace">Garden Terrace (3BR/2BA)</option>
                    <option value="historic-brownstone">Historic Brownstone (2BR/1BA)</option>
                    <option value="skyline-penthouse">Skyline Penthouse (3BR/3BA)</option>
                    <option value="cozy-corner">Cozy Corner (1BR/1BA)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Travel Details & Special Requests *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Check-in: March 15, 2024&#10;Check-out: March 20, 2024&#10;Guests: 2 adults&#10;Purpose: Anniversary getaway&#10;Special requests: Late check-in needed"
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Booking Inquiry
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                Contact Property Manager
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Property Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Home className="size-5 text-primary" />
                Our Properties
              </h3>
              <div className="space-y-3">
                {properties.map((property, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{property.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{property.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {property.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Times */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Response Times
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email Inquiries</span>
                    <span>Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Calls</span>
                    <span>7AM - 11PM Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">WhatsApp Messages</span>
                    <span>Within 30 minutes</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <MapPin className="size-4" />
                    Local property manager available for immediate assistance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Wifi, Car, Coffee, Shield, Clock, Key, Users, Star } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Downtown Locations',
      description:
        'All apartments located within walking distance of restaurants, shops, and major attractions.',
      badge: 'Location',
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description:
        'Complimentary fiber-optic WiFi in every apartment for work and entertainment needs.',
      badge: 'Amenities',
    },
    {
      icon: Car,
      title: 'Free Parking Included',
      description:
        'Dedicated parking space provided with each rental - no additional fees or street hunting.',
      badge: 'Convenience',
    },
    {
      icon: Coffee,
      title: 'Fully Equipped Kitchens',
      description:
        'Complete kitchen setup with appliances, cookware, and dining essentials for home cooking.',
      badge: 'Comfort',
    },
    {
      icon: Shield,
      title: 'Professional Cleaning',
      description: 'Thoroughly sanitized between guests with hospital-grade cleaning protocols.',
      badge: 'Safety',
    },
    {
      icon: Clock,
      title: 'Flexible Check-In',
      description:
        'Self check-in available 24/7 with secure keyless entry systems for your convenience.',
      badge: 'Flexibility',
    },
    {
      icon: Key,
      title: 'Instant Booking',
      description:
        'Book immediately for available dates - no waiting for host approval or lengthy processes.',
      badge: 'Booking',
    },
    {
      icon: Users,
      title: 'Local Host Support',
      description:
        'Dedicated local property manager available for assistance throughout your entire stay.',
      badge: 'Support',
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description:
        'Every apartment maintained to hotel standards with regular inspections and updates.',
      badge: 'Quality',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Local Stays
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Premium Apartments with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Unmatched Service
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the perfect blend of comfort, convenience, and local expertise in our
            carefully curated collection of downtown apartments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience downtown living at its finest?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

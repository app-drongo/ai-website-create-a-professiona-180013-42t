import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Wifi, Car, Coffee, Utensils, Tv, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const properties = [
    {
      name: 'Downtown Studio',
      description: 'Modern studio in the heart of the city center',
      price: '$89',
      period: '/night',
      badge: null,
      rating: 4.8,
      reviews: 127,
      features: [
        'Queen bed for 2 guests',
        'Full kitchen & dining area',
        'High-speed WiFi included',
        'Smart TV with streaming',
        'Air conditioning',
        'Walking distance to attractions',
      ],
      amenities: [Wifi, Utensils, Tv, Wind],
      cta: 'Book Now',
      popular: false,
      image: 'studio-apartment',
    },
    {
      name: 'Luxury Two-Bedroom',
      description: 'Spacious apartment perfect for families and groups',
      price: '$149',
      period: '/night',
      badge: 'Most Booked',
      rating: 4.9,
      reviews: 203,
      features: [
        'Sleeps up to 6 guests',
        'Two full bedrooms',
        'Living room with sofa bed',
        'Full kitchen & dining room',
        'Private parking included',
        'Balcony with city views',
        'Washer and dryer',
        'Premium location downtown',
      ],
      amenities: [Wifi, Car, Utensils, Tv, Wind, Coffee],
      cta: 'Book Now',
      popular: true,
      image: 'luxury-apartment',
    },
    {
      name: 'Executive Penthouse',
      description: 'Premium penthouse with panoramic city views',
      price: '$299',
      period: '/night',
      badge: 'Premium Stay',
      rating: 5.0,
      reviews: 89,
      features: [
        'Sleeps up to 8 guests',
        'Three bedrooms, two bathrooms',
        'Gourmet kitchen with island',
        'Private rooftop terrace',
        'Concierge services available',
        'Premium furnishings',
        'Dedicated workspace',
        'VIP check-in experience',
      ],
      amenities: [Wifi, Car, Utensils, Tv, Wind, Coffee],
      cta: 'Book Now',
      popular: false,
      image: 'penthouse-suite',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Featured Properties
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Handpicked Local
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Apartment Stays
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Discover our carefully curated collection of premium short-term rentals. Each property
            offers comfort, convenience, and authentic local experiences.
          </p>

          {/* Stay Duration Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Nightly Rates
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Weekly Stays
              <Badge variant="secondary" className="ml-2 text-xs">
                15% Off
              </Badge>
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg group cursor-pointer',
                property.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {property.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">
                    <Star className="size-3 mr-1 fill-current" />
                    {property.badge}
                  </Badge>
                </div>
              )}

              {/* Property Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {property.reviews} reviews
                  </Badge>
                </div>
              </div>

              {/* Background Gradient */}
              {property.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative pb-4">
                {property.badge && !property.popular && (
                  <Badge variant="outline" className="mb-2 w-fit">
                    {property.badge}
                  </Badge>
                )}

                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{property.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{property.rating}</span>
                  </div>
                </div>

                <CardDescription className="text-sm mb-4">{property.description}</CardDescription>

                <div className="flex items-end justify-between">
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold">{property.price}</span>
                    <span className="text-muted-foreground text-sm mb-1">{property.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {property.amenities.slice(0, 4).map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="size-4 text-muted-foreground" />
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-2">
                  {property.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-2.5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6 group-hover:shadow-md transition-all',
                    property.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={property.popular ? 'default' : 'outline'}
                >
                  {property.cta}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Free cancellation • Instant booking confirmation
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Planning an extended stay?</h3>
          <p className="text-muted-foreground mb-6">
            Enjoy significant savings on weekly and monthly bookings. Contact us directly for custom
            rates and personalized service for longer stays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
            <Button size="lg">Contact for Extended Stays</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

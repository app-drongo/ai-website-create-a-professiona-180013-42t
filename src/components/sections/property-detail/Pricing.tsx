import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Wifi, Car, Coffee, Utensils, Tv, Wind } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const apartments = [
    {
      name: 'Cozy Studio Downtown',
      description: 'Perfect for solo travelers and couples exploring the city center',
      price: '$89',
      period: '/night',
      badge: null,
      features: [
        '1 bedroom, 1 bathroom',
        'Free high-speed WiFi',
        'Fully equipped kitchenette',
        'Smart TV with streaming',
        'Air conditioning',
        'Walking distance to attractions',
      ],
      cta: 'Book Now',
      popular: false,
      rating: 4.8,
      reviews: 127,
    },
    {
      name: 'Deluxe City View Apartment',
      description: 'Most popular choice for families and business travelers',
      price: '$149',
      period: '/night',
      badge: 'Most Booked',
      features: [
        '2 bedrooms, 2 bathrooms',
        'Premium WiFi & workspace',
        'Full kitchen with dishwasher',
        '65" Smart TV & entertainment',
        'Central air & heating',
        'Private parking included',
        'Balcony with city views',
        'Weekly housekeeping',
      ],
      cta: 'Reserve Tonight',
      popular: true,
      rating: 4.9,
      reviews: 203,
    },
    {
      name: 'Luxury Penthouse Suite',
      description: 'Premium accommodation for special occasions and extended stays',
      price: '$299',
      period: '/night',
      badge: 'Premium Stay',
      features: [
        '3 bedrooms, 3 bathrooms',
        'Business center & WiFi',
        'Gourmet kitchen & dining',
        'Home theater system',
        'Climate control zones',
        'Reserved parking spaces',
        'Private rooftop terrace',
        'Daily housekeeping service',
      ],
      cta: 'Check Availability',
      popular: false,
      rating: 5.0,
      reviews: 89,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Available Apartments
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Local Stay
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Comfortable, fully-furnished apartments in prime locations. All rates include utilities,
            WiFi, and our signature local hospitality experience.
          </p>

          {/* Stay Duration Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Nightly Rate
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Weekly Stay
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>

        {/* Apartment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apartments.map((apartment, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                apartment.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {apartment.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {apartment.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {apartment.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {apartment.badge && !apartment.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {apartment.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{apartment.name}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {apartment.description}
                </CardDescription>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="font-medium">{apartment.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    ({apartment.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{apartment.price}</span>
                  <span className="text-muted-foreground mb-1">{apartment.period}</span>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {apartment.features.map((feature, featureIndex) => {
                    let icon = <Check className="size-3 text-primary" />;
                    if (feature.includes('WiFi')) icon = <Wifi className="size-3 text-primary" />;
                    if (feature.includes('parking')) icon = <Car className="size-3 text-primary" />;
                    if (feature.includes('kitchen'))
                      icon = <Utensils className="size-3 text-primary" />;
                    if (feature.includes('TV')) icon = <Tv className="size-3 text-primary" />;
                    if (feature.includes('air') || feature.includes('Climate'))
                      icon = <Wind className="size-3 text-primary" />;

                    return (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {icon}
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    apartment.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={apartment.popular ? 'default' : 'outline'}
                >
                  {apartment.cta}
                </Button>

                {apartment.name === 'Deluxe City View Apartment' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free cancellation • Instant booking confirmation
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Planning an extended stay?</h3>
          <p className="text-muted-foreground mb-6">
            We offer special monthly rates and corporate housing packages for business travelers,
            relocations, and extended vacation stays. Contact us for personalized pricing.
          </p>
          <Button variant="outline" size="lg">
            Inquire About Monthly Rates
          </Button>
        </div>
      </div>
    </section>
  );
}

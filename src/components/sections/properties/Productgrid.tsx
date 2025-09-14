import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Heart, Star, Filter, ChevronDown, Wifi, Car, Coffee } from 'lucide-react';

export default function Productgrid() {
  const properties = [
    {
      id: 1,
      name: 'Downtown Loft with City Views',
      pricePerNight: 89,
      originalPrice: 109,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 47,
      badge: 'Popular',
      location: 'Downtown District',
      guests: 4,
      bedrooms: 2,
      amenities: ['Wifi', 'Parking', 'Kitchen'],
    },
    {
      id: 2,
      name: 'Cozy Studio Near Waterfront',
      pricePerNight: 65,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 32,
      badge: 'Superhost',
      location: 'Waterfront Area',
      guests: 2,
      bedrooms: 1,
      amenities: ['Wifi', 'Coffee', 'Balcony'],
    },
    {
      id: 3,
      name: 'Modern Family Apartment',
      pricePerNight: 125,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 28,
      location: 'Residential Quarter',
      guests: 6,
      bedrooms: 3,
      amenities: ['Wifi', 'Parking', 'Washer'],
    },
    {
      id: 4,
      name: 'Historic Charm Apartment',
      pricePerNight: 75,
      originalPrice: 95,
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 41,
      badge: 'Special Offer',
      location: 'Old Town',
      guests: 3,
      bedrooms: 1,
      amenities: ['Wifi', 'Coffee', 'Garden'],
    },
    {
      id: 5,
      name: 'Business District Executive Suite',
      pricePerNight: 145,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 35,
      location: 'Business District',
      guests: 4,
      bedrooms: 2,
      amenities: ['Wifi', 'Parking', 'Gym'],
    },
    {
      id: 6,
      name: 'Garden View Retreat',
      pricePerNight: 95,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 52,
      badge: 'Guest Favorite',
      location: 'Garden District',
      guests: 5,
      bedrooms: 2,
      amenities: ['Wifi', 'Garden', 'Kitchen'],
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi':
        return <Wifi className="size-3" />;
      case 'Parking':
        return <Car className="size-3" />;
      case 'Coffee':
        return <Coffee className="size-3" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Available Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our handpicked collection of comfortable apartments in prime locations
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              Filters
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Location
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Price Range
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Guests
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>6 properties available</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Rating
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] bg-muted">
                {property.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={property.badge === 'Special Offer' ? 'destructive' : 'default'}
                  >
                    {property.badge}
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Heart className="size-4" />
                </Button>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="size-3" />
                  <span>{property.location}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{property.name}</h3>

                <div className="text-sm text-muted-foreground mb-3">
                  {property.guests} guests • {property.bedrooms} bedroom
                  {property.bedrooms > 1 ? 's' : ''}
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-3 mb-3">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 text-xs text-muted-foreground"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground ml-1">
                      {property.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({property.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-foreground">
                    ${property.pricePerNight}
                  </span>
                  <span className="text-sm text-muted-foreground">per night</span>
                  {property.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ${property.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Availability Notice */}
        <div className="mt-12 text-center">
          <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-foreground mb-2">All Properties Available</h3>
            <p className="text-muted-foreground">
              Can't find the perfect dates? Contact us directly for flexible booking options and
              special rates for extended stays.
            </p>
            <Button variant="outline" className="mt-4">
              Contact Property Manager
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

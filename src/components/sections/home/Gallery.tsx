import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Bed,
  Bath,
  Square,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Tv,
  Users,
  Star,
} from 'lucide-react';

export default function Gallery() {
  const galleries = [
    {
      id: 1,
      title: 'Downtown Executive Suite',
      location: 'Financial District',
      mainImage:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 850, guests: 2 },
      price: '$189/night',
      rating: 4.9,
      amenities: ['Wifi', 'Workspace', 'Coffee', 'TV'],
    },
    {
      id: 2,
      title: 'Riverside Family Apartment',
      location: 'Waterfront District',
      mainImage:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1200, guests: 4 },
      price: '$249/night',
      rating: 4.8,
      amenities: ['Wifi', 'Parking', 'Coffee', 'TV'],
    },
    {
      id: 3,
      title: 'Historic Loft Studio',
      location: 'Arts Quarter',
      mainImage:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 750, guests: 2 },
      price: '$159/night',
      rating: 4.7,
      amenities: ['Wifi', 'Coffee', 'TV'],
    },
    {
      id: 4,
      title: 'Garden View Two-Bedroom',
      location: 'University District',
      mainImage:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 1, sqft: 950, guests: 4 },
      price: '$199/night',
      rating: 4.9,
      amenities: ['Wifi', 'Parking', 'Coffee', 'TV'],
    },
    {
      id: 5,
      title: 'Modern Corner Unit',
      location: 'Tech District',
      mainImage: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 900, guests: 3 },
      price: '$219/night',
      rating: 4.8,
      amenities: ['Wifi', 'Workspace', 'Coffee', 'TV'],
    },
    {
      id: 6,
      title: 'Penthouse Three-Bedroom',
      location: 'Downtown Core',
      mainImage:
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      ],
      specs: { beds: 3, baths: 2, sqft: 1800, guests: 6 },
      price: '$349/night',
      rating: 5.0,
      amenities: ['Wifi', 'Parking', 'Coffee', 'TV'],
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
      case 'TV':
        return <Tv className="size-3" />;
      case 'Workspace':
        return <Square className="size-3" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Premium Apartment Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of 6 exceptional short-term rental apartments,
            each offering unique local experiences and modern comfort
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-background/90 backdrop-blur-sm"
                  >
                    <Grid3x3 className="size-4" />
                    {property.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    <span className="font-semibold text-sm">{property.price}</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="size-3 fill-primary text-primary" />
                    <span className="font-medium text-xs">{property.rating}</span>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-1">{property.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="size-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Specs */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Bed className="size-4" />
                    <span>
                      {property.specs.beds} bed{property.specs.beds > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="size-4" />
                    <span>
                      {property.specs.baths} bath{property.specs.baths > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{property.specs.guests} guests</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-2 mb-4">
                  {property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-muted px-2 py-1 rounded-full"
                    >
                      {getAmenityIcon(amenity)}
                      <span className="text-xs text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-1 mb-4">
                  {property.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${property.title} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Book Now Button */}
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Check Availability
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Experience Local Living?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Each of our 6 apartments offers a unique neighborhood experience with premium amenities
            and personalized local recommendations from our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Now
            </Button>
            <Button size="lg" variant="outline">
              Virtual Tours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

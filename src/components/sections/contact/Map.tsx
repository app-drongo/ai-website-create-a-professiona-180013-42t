import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Navigation,
  Home,
  Coffee,
  ShoppingBag,
  Train,
  Utensils,
  Trees,
} from 'lucide-react';

export default function Map() {
  const properties = [
    {
      id: 1,
      name: 'Downtown Loft',
      price: '$189/night',
      type: 'Studio',
      lat: 34.0522,
      lng: -118.2437,
      status: 'Available',
    },
    {
      id: 2,
      name: 'Riverside Apartment',
      price: '$225/night',
      type: '2 Bedroom',
      lat: 34.0622,
      lng: -118.2537,
      status: 'Available',
    },
    {
      id: 3,
      name: 'Historic District Suite',
      price: '$165/night',
      type: '1 Bedroom',
      lat: 34.0422,
      lng: -118.2337,
      status: 'Booked',
    },
    {
      id: 4,
      name: 'Garden View Flat',
      price: '$198/night',
      type: '1 Bedroom',
      lat: 34.0522,
      lng: -118.2637,
      status: 'Available',
    },
    {
      id: 5,
      name: 'City Center Studio',
      price: '$145/night',
      type: 'Studio',
      lat: 34.0722,
      lng: -118.2437,
      status: 'Available',
    },
    {
      id: 6,
      name: 'Artisan Quarter Apartment',
      price: '$210/night',
      type: '2 Bedroom',
      lat: 34.0322,
      lng: -118.2237,
      status: 'Available',
    },
  ];

  const amenities = [
    { icon: Coffee, name: 'Cafés & Coffee', count: 24 },
    { icon: Utensils, name: 'Local Restaurants', count: 47 },
    { icon: ShoppingBag, name: 'Shopping Centers', count: 12 },
    { icon: Train, name: 'Public Transit', count: 8 },
    { icon: Trees, name: 'Parks & Recreation', count: 15 },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Prime Locations Across the City
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All 6 Local Stays properties are strategically located near top attractions, dining, and
            transportation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/10] bg-muted">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10">
                  <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=750&fit=crop"
                    alt="City map showing Local Stays rental locations"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Map Overlay Elements */}
                <div className="absolute inset-0">
                  {/* Property Markers */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Home className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-2 whitespace-nowrap shadow-lg">
                          <p className="text-xs font-semibold">Downtown Loft</p>
                          <p className="text-xs text-muted-foreground">$189/night • Studio</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Home className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-2 whitespace-nowrap shadow-lg">
                          <p className="text-xs font-semibold">Riverside Apartment</p>
                          <p className="text-xs text-muted-foreground">$225/night • 2 Bedroom</p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-muted-foreground/20 rounded-full" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-muted-foreground hover:bg-muted-foreground/90"
                      >
                        <Home className="size-5" />
                      </Button>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Card className="p-2 whitespace-nowrap shadow-lg">
                          <p className="text-xs font-semibold">Historic District Suite</p>
                          <p className="text-xs text-muted-foreground">
                            $165/night • Currently Booked
                          </p>
                        </Card>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/3 right-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute top-1/6 left-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 left-1/4">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                      <Button
                        size="icon"
                        className="rounded-full size-10 bg-primary hover:bg-primary/90"
                      >
                        <Home className="size-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Map Controls */}
                <div className="absolute top-4 right-4 space-y-2">
                  <Button size="icon" variant="secondary" className="shadow-lg">
                    <Navigation className="size-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-primary rounded-full" />
                      <span>Available Tonight</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="size-3 bg-muted-foreground rounded-full" />
                      <span>Currently Booked</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Property List */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <MapPin className="size-5 text-primary" />
                  All Local Stays Properties
                </h3>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {properties.map(property => (
                    <div
                      key={property.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{property.name}</p>
                        <p className="text-xs text-muted-foreground">{property.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{property.price}</p>
                        <Badge
                          variant={property.status === 'Available' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {property.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nearby Amenities */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">What's Nearby</h3>
                <div className="space-y-3">
                  {amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
                          <amenity.icon className="size-5 text-muted-foreground" />
                        </div>
                        <span className="text-sm font-medium">{amenity.name}</span>
                      </div>
                      <Badge variant="outline">{amenity.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button className="w-full" size="lg">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

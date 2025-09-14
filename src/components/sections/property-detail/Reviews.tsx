import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ThumbsUp, Check, Filter, ChevronDown, MessageSquare, Award } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      author: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      date: '3 days ago',
      property: 'Riverside Studio Apartment',
      verified: true,
      helpful: 12,
      title: 'Perfect riverside getaway in the heart of the city',
      content:
        'This charming studio exceeded all expectations! The location right by the river was absolutely perfect for morning walks, and being so close to local cafes and markets made our stay incredibly convenient. The apartment was spotless, beautifully decorated, and had everything we needed for our weekend retreat.',
      pros: [
        'Prime riverside location',
        'Immaculate cleanliness',
        'Walking distance to local attractions',
      ],
      stayDate: 'November 2024',
    },
    {
      id: 2,
      author: 'James Mitchell',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 week ago',
      property: 'Historic District Loft',
      verified: true,
      helpful: 18,
      title: 'Incredible historic charm with modern comfort',
      content:
        'Staying in this beautifully restored loft was like stepping back in time while enjoying all modern amenities. The exposed brick walls and original hardwood floors were stunning. The neighborhood is rich with history, amazing restaurants, and local artisan shops. Highly recommend for anyone wanting an authentic local experience.',
      pros: ['Authentic historic character', 'Modern amenities', 'Vibrant neighborhood'],
      stayDate: 'November 2024',
    },
    {
      id: 3,
      author: 'Sophie Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      property: 'Garden View Two-Bedroom',
      verified: true,
      helpful: 24,
      title: 'Peaceful garden oasis perfect for families',
      content:
        'Our family of four had the most wonderful stay! The garden view was absolutely beautiful, and the kids loved watching the birds from the large windows. The apartment was spacious, well-equipped kitchen made family meals easy, and the quiet neighborhood was perfect for evening strolls. Will definitely book again!',
      pros: ['Family-friendly layout', 'Beautiful garden views', 'Quiet residential area'],
      stayDate: 'October 2024',
    },
    {
      id: 4,
      author: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 4,
      date: '3 weeks ago',
      property: 'Downtown Executive Suite',
      verified: true,
      helpful: 15,
      title: 'Excellent for business travelers',
      content:
        "Perfect location for my business trip - walking distance to the financial district and excellent public transport connections. The workspace setup was ideal for remote meetings, and the building's amenities were top-notch. Only minor suggestion would be blackout curtains for the bedroom, but overall fantastic stay.",
      pros: ['Business district location', 'Professional workspace', 'Great transport links'],
      stayDate: 'October 2024',
    },
    {
      id: 5,
      author: 'Isabella Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 month ago',
      property: 'Artisan Quarter Apartment',
      verified: true,
      helpful: 21,
      title: 'Immersed in local culture and creativity',
      content:
        'This apartment in the artisan quarter was absolutely magical! Surrounded by local galleries, craft workshops, and authentic eateries. The apartment itself reflects the creative spirit of the neighborhood with unique local artwork and handcrafted furniture. Perfect for experiencing the real local culture.',
      pros: ['Cultural neighborhood', 'Unique local decor', 'Authentic dining nearby'],
      stayDate: 'October 2024',
    },
  ];

  const stats = {
    average: 4.9,
    total: 127,
    distribution: [
      { stars: 5, count: 98 },
      { stars: 4, count: 23 },
      { stars: 3, count: 4 },
      { stars: 2, count: 1 },
      { stars: 1, count: 1 },
    ],
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Guest Experiences at Local Stays Rentals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our carefully curated apartments special through authentic guest
            stories
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                {/* Overall Rating */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">{stats.average}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(stats.average)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {stats.total} verified stays
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="space-y-2 mb-6">
                  {stats.distribution.map(item => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-3">{item.stars}</span>
                      <Star className="size-4 fill-primary text-primary" />
                      <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(item.count / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-primary" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Local hospitality experts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-primary" />
                    <span>24/7 guest support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="size-4" />
                  All Properties
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Apartment Type
                  <ChevronDown className="size-4" />
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  Rating
                  <ChevronDown className="size-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                Most Recent
                <ChevronDown className="size-4" />
              </Button>
            </div>

            {/* Review Cards */}
            {reviews.map(review => (
              <Card key={review.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs gap-1">
                              <Check className="size-3" />
                              Verified Stay
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{review.date}</span>
                          <span>•</span>
                          <span>Stayed {review.stayDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Property Badge */}
                  <Badge variant="outline" className="mb-3 bg-accent/10">
                    {review.property}
                  </Badge>

                  {/* Review Content */}
                  <h5 className="font-semibold text-foreground mb-2">{review.title}</h5>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{review.content}</p>

                  {/* Pros */}
                  {review.pros && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.pros.map((pro, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="gap-1 bg-primary/10 text-primary"
                        >
                          <Check className="size-3" />
                          {pro}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <MessageSquare className="size-4" />
                      Host Response
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg" className="px-8">
                View All {stats.total} Reviews
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                See experiences from all our Local Stays properties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

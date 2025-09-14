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
      helpful: 18,
      title: 'Perfect riverside getaway in the heart of the city',
      content:
        'This charming studio exceeded all expectations! The river views from the balcony were breathtaking, especially at sunrise. The apartment was spotlessly clean with thoughtful local touches throughout. Walking distance to the best cafes and markets in the neighborhood. Our host provided excellent recommendations for authentic local restaurants.',
      pros: ['Stunning river views', 'Immaculate cleanliness', 'Prime local neighborhood'],
      stayDate: 'November 2024',
    },
    {
      id: 2,
      author: 'James Mitchell',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      date: '1 week ago',
      property: 'Historic District Two-Bedroom',
      verified: true,
      helpful: 22,
      title: 'Authentic local living experience',
      content:
        'Stayed here for a business trip and loved the authentic neighborhood feel. The apartment has beautiful original features mixed with modern amenities. The kitchen was fully equipped - perfect for preparing meals with ingredients from the nearby farmers market. Excellent transport connections while feeling like a true local resident.',
      pros: ['Historic charm', 'Fully equipped kitchen', 'Excellent location'],
      stayDate: 'November 2024',
    },
    {
      id: 3,
      author: 'Sophie Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '2 weeks ago',
      property: 'Garden View One-Bedroom',
      verified: true,
      helpful: 31,
      title: 'Peaceful oasis with incredible garden views',
      content:
        'What a hidden gem! The private garden view made this feel like a secret retreat in the city. The apartment was beautifully decorated with local artwork and plants. We spent every morning having coffee on the balcony overlooking the lush garden. The neighborhood has amazing local bakeries and artisan shops within walking distance.',
      pros: ['Private garden views', 'Local artwork', 'Quiet neighborhood'],
      stayDate: 'October 2024',
    },
    {
      id: 4,
      author: 'David Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 4,
      date: '3 weeks ago',
      property: 'Penthouse Loft',
      verified: true,
      helpful: 15,
      title: 'Spectacular city views from rooftop terrace',
      content:
        'The rooftop terrace was absolutely incredible - 360-degree city views that were perfect for evening drinks. The loft itself is spacious and modern with high ceilings. Only minor issue was street noise in the early morning, but the amazing views more than made up for it. Great for couples or small groups wanting a special experience.',
      pros: ['Amazing rooftop terrace', 'Spacious modern design', 'Central location'],
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
            Guest Reviews & Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our local apartments special through authentic guest stories
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
                <div className="space-y-3 border-t border-muted pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="size-4 text-primary" />
                    <span>All reviews verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="size-4 text-primary" />
                    <span>Local Stays certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="size-4 text-primary" />
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
              <Card key={review.id} className="border-muted">
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.author} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {review.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          {review.verified && (
                            <Badge
                              variant="secondary"
                              className="text-xs gap-1 bg-primary/10 text-primary"
                            >
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
                  <Badge variant="outline" className="mb-3 border-primary/20 text-primary">
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
                      className="gap-2 text-muted-foreground hover:text-primary"
                    >
                      <ThumbsUp className="size-4" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground hover:text-primary"
                    >
                      <MessageSquare className="size-4" />
                      Host Response
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-6">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All {stats.total} Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

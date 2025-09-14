import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  Home,
  MapPin,
  Calendar,
  Shield,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Home,
      title: 'Authentic Local Living',
      description:
        'We curate unique apartments that give you a genuine taste of local life, not just another generic hotel experience.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety First',
      description:
        'Every property is personally inspected and maintained to ensure your comfort, safety, and peace of mind during your stay.',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description:
        'As a family-owned business, we provide personalized service and local recommendations to make your stay unforgettable.',
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description:
        'Our handpicked apartments are strategically located in vibrant neighborhoods with easy access to attractions and amenities.',
    },
  ];

  const stats = [
    { value: '2018', label: 'Established', icon: Award },
    { value: '2,500+', label: 'Happy Guests', icon: Users },
    { value: '4.9/5', label: 'Average Rating', icon: Star },
    { value: '6', label: 'Premium Properties', icon: Home },
  ];

  const team = [
    {
      name: 'Maria Santos',
      role: 'Founder & Property Manager',
      image: 'MS',
      bio: 'Local hospitality expert with 12+ years managing vacation rentals and creating memorable guest experiences.',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Operations Director',
      image: 'CR',
      bio: 'Former hotel manager specializing in property maintenance and guest services excellence.',
    },
    {
      name: 'Ana Gutierrez',
      role: 'Guest Experience Coordinator',
      image: 'AG',
      bio: 'Multilingual hospitality professional dedicated to ensuring every guest feels at home.',
    },
    {
      name: 'Diego Martinez',
      role: 'Maintenance Supervisor',
      image: 'DM',
      bio: 'Skilled craftsman ensuring all properties meet the highest standards of comfort and functionality.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Local Stays Rentals
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Home Away From Home
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              In Every Destination
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a family-owned property management company dedicated to providing travelers with
            authentic, comfortable, and memorable short-term rental experiences in carefully
            selected locations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018 by Maria Santos, a passionate traveler and hospitality professional,
                Local Stays Rentals began with a simple vision: to offer travelers the comfort of
                home with the excitement of discovering new places.
              </p>
              <p>
                After years of staying in impersonal hotels and disappointing rentals during her own
                travels, Maria decided to create something different. She carefully selected and
                transformed six unique apartments into welcoming spaces that reflect the local
                culture and character.
              </p>
              <p>
                Today, we're proud to have hosted over 2,500 guests from around the world, each
                leaving with unforgettable memories and a deeper connection to their destination.
              </p>
            </div>
            <Button className="group">
              View Our Properties
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every guest deserves to feel welcomed, comfortable, and inspired during their
                      travels."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Maria Santos, Founder</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground">
              The principles that guide our commitment to exceptional hospitality and authentic
              travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              The dedicated professionals who ensure every aspect of your stay exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Contact Our Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Local Stays Rentals provided the perfect apartment for our family vacation. The
                location was ideal, the space was immaculate, and Maria's recommendations made our
                trip unforgettable."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RW
                </div>
                <div className="text-left">
                  <div className="font-semibold">Rachel Williams</div>
                  <div className="text-sm text-muted-foreground">Family Traveler from Toronto</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

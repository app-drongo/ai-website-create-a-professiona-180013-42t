import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Destinations',
      links: [
        { name: 'Downtown Loft', href: '/properties/downtown-loft' },
        { name: 'Riverside Studio', href: '/properties/riverside-studio' },
        { name: 'Garden Apartment', href: '/properties/garden-apartment' },
        { name: 'Historic District', href: '/properties/historic-district' },
        { name: 'City Center Suite', href: '/properties/city-center-suite' },
        { name: 'Waterfront View', href: '/properties/waterfront-view' },
      ],
    },
    {
      title: 'Guest Services',
      links: [
        { name: 'Property Management', href: '/services' },
        { name: 'Concierge Services', href: '/concierge' },
        { name: 'Local Experiences', href: '/experiences' },
        { name: 'Transportation', href: '/transport' },
        { name: 'Extended Stays', href: '/extended-stays' },
        { name: 'Group Bookings', href: '/groups' },
      ],
    },
    {
      title: 'Travel Resources',
      links: [
        { name: 'Guest Guide', href: '/guest-guide' },
        { name: 'Local Attractions', href: '/attractions' },
        { name: 'Restaurant Guide', href: '/dining' },
        { name: 'Travel Tips', href: '/travel-tips' },
        { name: 'Area Reviews', href: '/reviews' },
        { name: 'Weather Updates', href: '/weather' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Booking Policy', href: '/booking-policy' },
        { name: 'Cancellation Terms', href: '/cancellation' },
        { name: 'House Rules', href: '/house-rules' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Guest Safety', href: '/safety' },
        { name: 'Property Care', href: '/property-care' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/localstaysrentals' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/localstaysrentals' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/localstaysrentals' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/localstaysrentals' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/localstaysrentals' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">LS</span>
                </div>
                <span className="font-bold text-xl">Local Stays Rentals</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Discover authentic local living with our curated collection of premium short-term
                apartments. Experience comfort, convenience, and genuine hospitality in every stay.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">reservations@localstaysrentals.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-STAY</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Downtown District, Premium Locations</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Travel Insider Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email for exclusive offers"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive deals, local insights, and early access to new properties.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Local Stays Rentals. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> for travelers
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/property-map"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Property Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/guest-portal"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Guest Portal
            </Link>
            <Link
              href="/emergency-contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              24/7 Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

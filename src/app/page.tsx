"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { CheckCircle, Globe, Shield, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="largeSizeMediumTitles"
      background="plain"
      cardStyle="outline-light"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Sofia di Bella"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Premium Insurance Solutions for Your Future"
          description="Expert insurance guidance from an internationally educated professional. Secure your family and business with customized coverage plans."
          tag="International Insurance Advisor"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765125692764-ybqab6h5.jpg"
          imageAlt="Modern luxury insurance office"
          buttons={[
            { text: "Schedule Consultation", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Sofia di Bella - Your" },
            { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124163829-f83mwmpt.jpg", alt: "Sofia di Bella professional portrait" },
            { type: "text", content: "International Insurance Expert" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Get in Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Comprehensive Insurance Services"
          description="Tailored insurance solutions designed for individuals, families, and businesses. Experience premium service with international standards."
          features={[
            {
              id: "1",
              title: "Life Insurance Planning",
              description: "Secure your family's financial future with comprehensive life insurance policies tailored to your needs.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124164579-p7ekop04.jpg"
              },
              items: [
                { icon: Shield, text: "Full coverage protection" },
                { icon: CheckCircle, text: "Flexible payment options" },
                { icon: Zap, text: "Quick claim processing" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Business Insurance Solutions",
              description: "Protect your business assets and operations with professional coverage designed for entrepreneurs.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124165301-0upoq1r4.jpg"
              },
              items: [
                { icon: Shield, text: "Liability protection" },
                { icon: CheckCircle, text: "Asset coverage" },
                { icon: Zap, text: "24/7 support" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "International Coverage",
              description: "Multilingual support and international insurance expertise for expats and globally-minded clients.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124166109-kp8crhp8.jpg"
              },
              items: [
                { icon: Globe, text: "Global coverage" },
                { icon: CheckCircle, text: "Multilingual support" },
                { icon: Zap, text: "International expertise" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Clients Say"
          description="Trusted by families and businesses across Rome and beyond for expert insurance guidance."
          testimonials={[
            {
              id: "1",
              name: "Alessandra Rossi",
              role: "Business Owner",
              company: "Rome Fashion Boutique",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124166861-gxun9yp1.png"
            },
            {
              id: "2",
              name: "Marco Conti",
              role: "Executive Director",
              company: "Tech Solutions Italia",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124167419-xom7kst7.jpg"
            },
            {
              id: "3",
              name: "Isabella Romano",
              role: "Family Office Manager",
              company: "Romano Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124167982-4jwujrxo.jpg"
            },
            {
              id: "4",
              name: "Giovanni Marchetti",
              role: "Entrepreneur",
              company: "Marchetti Consulting",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124168803-9vo4rgrx.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Schedule Your Insurance Consultation"
          description="Contact Sofia di Bella for personalized insurance guidance. Available for consultations in Italian, English, and other languages."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124163243-kojuxoba.jpg"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Request Appointment"
          termsText="We respect your privacy and will respond within 24 hours."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765124169603-psc2qinb.jpg"
          imageAlt="Modern office building"
          logoText="Sofia di Bella Insurance"
          copyrightText="© 2025 Sofia di Bella Insurance Office. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Life Insurance", href: "services" },
                { label: "Business Coverage", href: "services" },
                { label: "International Plans", href: "services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Sofia", href: "about" },
                { label: "Testimonials", href: "testimonials" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
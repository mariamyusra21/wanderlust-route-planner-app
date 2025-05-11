import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Map, Users, Globe, Heart, Award, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const TEAM_MEMBERS = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Travel enthusiast with over 15 years of experience in the tourism industry.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Michael Chen",
    role: "Head of Destinations",
    bio: "Former tour guide who has visited over 50 countries across 6 continents.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Customer Experience Manager",
    bio: "Passionate about creating memorable travel experiences for every client.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  }
];

const CONTACT_INFO = [
  {
    icon: <Phone className="h-5 w-5 text-travel-primary" />,
    title: "Phone",
    content: "+1 (555) 123-4567",
    action: "Call us"
  },
  {
    icon: <Mail className="h-5 w-5 text-travel-primary" />,
    title: "Email",
    content: "hello@wanderlust.com",
    action: "Email us"
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-travel-primary" />,
    title: "Live Chat",
    content: "Available Mon-Fri, 9AM-6PM EST",
    action: "Start chat"
  }
];

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-travel-secondary/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-travel-secondary">About Wanderlust</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              We're on a mission to help you discover the world's most amazing destinations and create unforgettable travel experiences.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-travel-secondary">Our Story</h2>
                <p className="mb-4">
                  Wanderlust was born from a passion for travel and a desire to share the world's wonders with others. Founded in 2015, we started as a small blog sharing travel tips and hidden gems from around the globe.
                </p>
                <p className="mb-4">
                  As our community grew, so did our vision. Today, we're a full-service travel platform dedicated to helping travelers plan their perfect trips with curated destinations, customized itineraries, and expert advice.
                </p>
                <p>
                  We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. Our team of passionate travelers works tirelessly to make these experiences accessible to everyone.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                  alt="Wanderlust team" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-travel-secondary">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="bg-travel-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-travel-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Travel</h3>
                <p>We promote responsible tourism that respects local communities and preserves natural environments for future generations.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="bg-travel-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-travel-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Experiences</h3>
                <p>We believe in creating genuine connections with cultures, people, and places rather than superficial tourist activities.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <div className="bg-travel-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-travel-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p>We're committed to providing the highest quality service and attention to detail in everything we do for our travelers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-travel-secondary">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="bg-background border rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-travel-primary mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced with smaller but clear details */}
        <section className="py-16 bg-travel-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-travel-secondary">Get in Touch</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-center">
              Have questions or want to learn more about our services? We'd love to hear from you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {CONTACT_INFO.map((item, index) => (
                <Card key={index} className="border-none shadow-sm hover-card">
                  <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                    <div className="bg-travel-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.content}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-travel-primary text-travel-primary hover:bg-travel-primary/10 text-xs px-3 py-1 h-8"
                    >
                      {item.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-travel-secondary">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 rounded-md border border-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded-md border border-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-3 rounded-md border border-input"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto bg-travel-primary hover:bg-travel-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

import { useState } from "react";
import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, Shield, Clock, Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState("");
  const [isHomeService, setIsHomeService] = useState(false);

  const services = [
    {
      title: "Sada Polish",
      description: "Traditional polishing method that brings out the natural shine of marble surfaces, perfect for regular maintenance.",
      price: "₹15",
      unit: "per sq ft",
    },
    {
      title: "Granite Polish",
      description: "Specialized treatment for granite surfaces to enhance durability and create a lasting, mirror-like finish.",
      price: "₹35",
      unit: "per sq ft",
    },
    {
      title: "Marble Buffering",
      description: "Advanced buffering technique to restore worn marble surfaces and maintain their pristine appearance.",
      price: "₹21",
      unit: "per sq ft",
    },
    {
      title: "Diamond Polish",
      description: "Premium polishing service using diamond-embedded pads for the highest level of shine and durability.",
      price: "₹51",
      unit: "per sq ft",
    },
    {
      title: "Tile Cleaning",
      description: "Professional cleaning service for all types of tiles, removing deep-seated dirt and restoring grout lines.",
      price: "₹11",
      unit: "per sq ft",
    },
    {
      title: "Home Cleaning",
      description: "Comprehensive cleaning service for all your marble, granite, and tile surfaces throughout your home.",
      pricing: [
        { label: "Single Room", price: "₹600" },
        { label: "Whole House", price: "₹7,000" },
      ],
    },
  ];

  const reviews = [
    {
      name: "John Smith",
      review: "Exceptional service! My marble floors look brand new again.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      review: "Professional team and outstanding results. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Brown",
      review: "The diamond polish service exceeded my expectations.",
      rating: 5,
    },
  ];

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setIsHomeService(value === "Home Cleaning");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Marble & Stone Polishing Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Transform your surfaces with our professional polishing expertise
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Get Free Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Book a Service</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="service">Select Service</Label>
                    <Select onValueChange={handleServiceChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {!isHomeService && selectedService && (
                    <div className="grid gap-2">
                      <Label htmlFor="area">Area (in sq ft)</Label>
                      <Input id="area" type="number" placeholder="Enter area" />
                    </div>
                  )}

                  {isHomeService && (
                    <div className="grid gap-2">
                      <Label htmlFor="roomType">Room Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single Room</SelectItem>
                          <SelectItem value="whole">Whole House</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Booking
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  {'pricing' in service ? (
                    <div className="space-y-2">
                      {service.pricing.map((price, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-gray-300">{price.label}</span>
                          <span className="text-white font-semibold">{price.price}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-end justify-between mt-4">
                      <span className="text-gray-300">{service.unit}</span>
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Quality Guaranteed</h3>
                <p className="text-gray-400">Premium service with lasting results</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Timely Service</h3>
                <p className="text-gray-400">On-time completion guaranteed</p>
              </div>
              <div className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-400">Skilled and certified professionals</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">5-Star Service</h3>
                <p className="text-gray-400">Consistently rated excellent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Customer Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{review.review}"</p>
                  <p className="text-white font-semibold">- {review.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
import { useState } from "react";
import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function Services() {
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

  const handleServiceSelect = (title: string) => {
    setIsHomeService(title === "Home Cleaning");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900">
      <Header />
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Services</h1>
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => handleServiceSelect(service.title)}
                    >
                      Book Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Book {service.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      {!isHomeService && (
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
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

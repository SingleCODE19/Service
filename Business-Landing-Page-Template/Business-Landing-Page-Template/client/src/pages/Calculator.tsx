import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Service {
  title: string;
  price: number;
  unit: string;
}

interface HomeCleaningPrice {
  label: string;
  price: number;
}

export default function Calculator() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [area, setArea] = useState<number>(0);
  const [roomType, setRoomType] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const services: Service[] = [
    { title: "Sada Polish", price: 15, unit: "per sq ft" },
    { title: "Granite Polish", price: 35, unit: "per sq ft" },
    { title: "Marble Buffering", price: 21, unit: "per sq ft" },
    { title: "Diamond Polish", price: 51, unit: "per sq ft" },
    { title: "Tile Cleaning", price: 11, unit: "per sq ft" },
  ];

  const homeCleaningPrices: HomeCleaningPrice[] = [
    { label: "Single Room", price: 600 },
    { label: "Whole House", price: 7000 },
  ];

  const calculatePrice = () => {
    if (selectedService === "Home Cleaning") {
      const selectedPrice = homeCleaningPrices.find(p => p.label === roomType);
      setTotalPrice(selectedPrice ? selectedPrice.price : 0);
    } else {
      const service = services.find(s => s.title === selectedService);
      setTotalPrice(service ? service.price * area : 0);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedService, area, roomType]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Service Price Calculator
          </h1>
          
          <Card className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="service">Select Service</Label>
                <Select onValueChange={setSelectedService} value={selectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.title} value={service.title}>
                        {service.title} (₹{service.price} {service.unit})
                      </SelectItem>
                    ))}
                    <SelectItem value="Home Cleaning">Home Cleaning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedService && selectedService !== "Home Cleaning" && (
                <div className="grid gap-2">
                  <Label htmlFor="area">Area (in sq ft)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Enter area"
                    value={area || ""}
                    onChange={(e) => setArea(Number(e.target.value))}
                  />
                </div>
              )}

              {selectedService === "Home Cleaning" && (
                <div className="grid gap-2">
                  <Label htmlFor="roomType">Room Type</Label>
                  <Select onValueChange={setRoomType} value={roomType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      {homeCleaningPrices.map((price) => (
                        <SelectItem key={price.label} value={price.label}>
                          {price.label} (₹{price.price})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Estimated Price</p>
                  <p className="text-4xl font-bold text-white">₹{totalPrice.toLocaleString()}</p>
                </div>
              </div>

              <Button
                className="w-full mt-4"
                size="lg"
                onClick={() => window.location.href = `/services?service=${encodeURIComponent(selectedService)}`}
              >
                Book This Service
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

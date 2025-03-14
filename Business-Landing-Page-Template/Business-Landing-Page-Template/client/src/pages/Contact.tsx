import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900">
      <Header />
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <Card className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-gray-400">Email</p>
                      <a href="mailto:arjunmarblepolishcontractor@gmail.com" className="text-white hover:text-primary">
                        arjunmarblepolishcontractor@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <a href="tel:9887561872" className="text-white hover:text-primary">
                        +91 988 756 1872
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-gray-400">Address</p>
                      <p className="text-white">
                        223A, Vaishnav Vihar, Nangal Jaise Bohra,<br />
                        Jhotawara, Jaipur
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
                <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[100px]" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Google Maps Integration */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8901234567890!2d75.7967!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjQiTiA3NcKwNDcnNDguMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

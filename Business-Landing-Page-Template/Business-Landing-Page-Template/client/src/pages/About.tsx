import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Clock, Trophy, Star } from "lucide-react";

export default function About() {
  const achievements = [
    {
      icon: Clock,
      number: "25+",
      label: "Years of Experience",
      description: "Serving since 2001 with expertise in marble polishing",
    },
    {
      icon: Trophy,
      number: "1500+",
      label: "Projects Completed",
      description: "Successfully delivered premium polishing services",
    },
    {
      icon: Star,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently maintaining high quality standards",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              With over two decades of experience in marble polishing and restoration,
              we've built our reputation on excellence, reliability, and superior craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
                <achievement.icon className="w-12 h-12 text-primary mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.label}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Journey</h2>
              <p className="text-gray-300 mb-4">
                Since our establishment in 2001, we've been at the forefront of the marble polishing
                industry. Our journey began with a simple mission: to provide exceptional stone
                restoration services that bring out the natural beauty of every surface we touch.
              </p>
              <p className="text-gray-300">
                Over the years, we've grown from a small local business to one of the most trusted
                names in marble polishing in Jaipur, serving both residential and commercial clients
                with the same dedication to quality and excellence.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Expertise</h2>
              <p className="text-gray-300 mb-4">
                With 25 years of hands-on experience, our team has developed unparalleled expertise
                in all aspects of marble and stone care. From traditional sada polish to advanced
                diamond polishing techniques, we understand the unique characteristics of every
                stone type and how to bring out its best qualities.
              </p>
              <p className="text-gray-300">
                Having successfully completed over 1500 projects, we've encountered and mastered
                every challenge in stone restoration, making us the go-to experts for both simple
                polishing jobs and complex restoration projects.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

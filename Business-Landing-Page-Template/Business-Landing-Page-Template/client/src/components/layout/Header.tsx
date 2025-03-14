import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">
            Arjun <span className="text-primary">Marble Polish</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services">
            <span className={`cursor-pointer transition-colors ${
              isActive("/services") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Services
            </span>
          </Link>
          <Link href="/calculator">
            <span className={`cursor-pointer transition-colors ${
              isActive("/calculator") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Price Calculator
            </span>
          </Link>
          <Link href="/contact">
            <span className={`cursor-pointer transition-colors ${
              isActive("/contact") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Contact
            </span>
          </Link>
          <Link href="/blog">
            <span className={`cursor-pointer transition-colors ${
              isActive("/blog") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Blog
            </span>
          </Link>
          <Link href="/signin">
            <span className={`cursor-pointer transition-colors ${
              isActive("/signin") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Sign In
            </span>
          </Link>
        </nav>

        <Link href="/services">
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
            Book Now
          </Button>
        </Link>
      </div>
    </motion.header>
  );
}
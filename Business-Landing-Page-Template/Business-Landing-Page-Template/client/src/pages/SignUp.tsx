import { Link } from "wouter";
import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900">
      <Header />
      <main className="pt-24 px-4">
        <div className="max-w-md mx-auto">
          <Card className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
            <h1 className="text-2xl font-bold text-white mb-6">Sign Up</h1>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
            <p className="text-center mt-4 text-gray-400">
              Already have an account?{" "}
              <Link href="/signin">
                <a className="text-primary hover:underline">Sign In</a>
              </Link>
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}

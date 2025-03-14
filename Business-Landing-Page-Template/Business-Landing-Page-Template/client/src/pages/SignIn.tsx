import { Link } from "wouter";
import Header from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900">
      <Header />
      <main className="pt-24 px-4">
        <div className="max-w-md mx-auto">
          <Card className="p-6 bg-white/5 backdrop-blur-lg border-gray-800">
            <h1 className="text-2xl font-bold text-white mb-6">Sign In</h1>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            <p className="text-center mt-4 text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup">
                <a className="text-primary hover:underline">Sign Up</a>
              </Link>
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}

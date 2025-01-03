import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NextGen
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Build something amazing with Next.js and modern tools
          </p>
          <Button size="lg">
            Get Started
          </Button>
        </div>
      </main>
    </>
  );
}

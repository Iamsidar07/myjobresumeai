import { ArrowRight, CheckCircle } from "lucide-react";
import { FadeIn } from "./fade-in";
import GradientText from "./gradient-text";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="bg-gradient-to-r from-pink-600 via-pink-300 to-green-500 p-px rounded-full hover:brightness-125 transition-all hover:backdrop-filter backdrop-blur-md">
              <div className="inline-flex items-center rounded-full bg-black px-3 py-1 text-sm text-gray-400">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                <span>Launching Soon</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl">
              <GradientText>Tailor your resume</GradientText> to any job in{" "}
              <GradientText>seconds</GradientText> with AI
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl">
              Stop spending hours manually editing your resume. Let our AI
              analyze job descriptions and optimize your resume to get more
              interviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="group bg-gradient-to-r text-lg from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 h-12 border-0"
              >
                Try It Now <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-5 h-12 text-lg font-medium border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-white hover:bg-zinc-800 hover:text-white"
              >
                See How It Works
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Free plan available</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { FadeIn } from "./fade-in";
import GradientText from "./gradient-text";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-zinc-800 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,40,120,0.2),transparent_60%)]"></div>
            <div className="p-1 bg-gradient-to-r from-pink-500 to-purple-600" />
            <div className="px-6 py-16 md:p-16 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to land your <GradientText>dream job</GradientText>?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Join thousands of job seekers who are getting more interviews
                with myjobb Resume AI.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 h-14 text-lg font-medium border-0 group"
              >
                Get Started Free <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <p className="text-gray-500 mt-4">No credit card required</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

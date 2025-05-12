import { Award, Clock, Target } from "lucide-react";
import { FadeIn } from "./fade-in";
import GradientText from "./gradient-text";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(40,120,200,0.1),transparent_40%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Stop wasting time on{" "}
                <GradientText>manual resume edits</GradientText>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                myjobb Resume AI eliminates the frustration of manually
                tailoring your resume for each application. Our AI does the
                heavy lifting so you can focus on preparing for interviews.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full p-2">
                    <Clock className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Save hours per application
                    </h3>
                    <p className="text-gray-400">
                      Reduce resume tailoring time from hours to minutes
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full p-2">
                    <Target className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Increase interview chances
                    </h3>
                    <p className="text-gray-400">
                      Get past ATS systems with optimized keywords and
                      formatting
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full p-2">
                    <Award className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Professional quality
                    </h3>
                    <p className="text-gray-400">
                      Create industry-standard resumes that highlight your
                      strengths
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 h-12 text-base font-medium border-0"
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative h-[550px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-3xl -z-10 blur-xl opacity-70" />

              <Image
              fill
                alt="Resume working"
                src={"/resume.svg"}
              />
              
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

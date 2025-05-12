import { ArrowRight, FileText, Upload, Zap } from "lucide-react";
import { FadeIn, FadeInStagger } from "./fade-in";
import GradientText from "./gradient-text";
import StepCard from "./step-card";
import { Button } from "./ui/button";
import Divider from "./divider";

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-black relative">
      <Divider />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(200,40,120,0.1),transparent_40%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How <GradientText>myjobb Resume AI</GradientText> works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three simple steps to optimize your resume and land more
              interviews
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="grid md:grid-cols-3 gap-8 p-4">
            <FadeIn>
              <StepCard
                number="1"
                icon={<Upload className="h-6 w-6" />}
                title="Upload Your Resume"
                description="Upload your existing resume or create a new one using our templates."
              />
            </FadeIn>
            <FadeIn>
              <StepCard
                number="2"
                icon={<FileText className="h-6 w-6" />}
                title="Add Job Description"
                description="Paste the job description you're applying for or connect to job boards."
              />
            </FadeIn>
            <FadeIn>
              <StepCard
                number="3"
                icon={<Zap className="h-6 w-6" />}
                title="Get Optimized Resume"
                description="Download your tailored resume with AI-enhanced content ready to submit."
              />
            </FadeIn>
          </div>
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 h-12 border-0"
            >
              Try It Now{" "}
              <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

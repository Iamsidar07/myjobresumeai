import { FileText, Sparkles, Zap } from "lucide-react";
import { FadeIn, FadeInStagger } from "./fade-in";
import FeatureCard from "./feature-card";
import GradientText from "./gradient-text";

export default function Features() {
  return (
    <section className="py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,40,200,0.1),transparent_40%)]"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <GradientText>Powerful AI tools</GradientText> to supercharge your
              job search
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our suite of AI-powered tools helps you create the perfect resume
              for every job application
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <FeatureCard
                icon={<FileText className="h-8 w-8" />}
                title="AI Resume Scanner"
                description="Upload your resume and a job description. Our AI analyzes the match and identifies gaps to improve."
              />
            </FadeIn>
            <FadeIn>
              <FeatureCard
                icon={<Zap className="h-8 w-8" />}
                title="AI Resume Enhancer"
                description="Get personalized suggestions to optimize your resume with relevant keywords and skills for each job."
              />
            </FadeIn>
            <FadeIn>
              <FeatureCard
                icon={<Sparkles className="h-8 w-8" />}
                title="AI Resume Builder"
                description="Create a professional resume from scratch with our AI-powered builder that follows industry best practices."
              />
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}

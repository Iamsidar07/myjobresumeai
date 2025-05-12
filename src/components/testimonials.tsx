import { FadeIn, FadeInStagger } from "./fade-in";
import GradientText from "./gradient-text";
import Divider from "./divider";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-black relative">
      <Divider/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(120,40,200,0.1),transparent_40%)]"></div>
      <div className="relative z-10 container mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by <GradientText>job seekers</GradientText> everywhere
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what our users are saying about myjobb Resume AI
            </p>
          </div>
        </FadeIn>

        <FadeInStagger>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn>
              <TestimonialCard
                quote="I applied to 5 jobs with my AI-optimized resume and got 3 interview calls. The difference is night and day!"
                author="Sarah K."
                role="Marketing Professional"
                rating={5}
              />
            </FadeIn>
            <FadeIn>
              <TestimonialCard
                quote="As a career changer, I struggled to highlight my transferable skills. Resume AI helped me create a resume that got me noticed."
                author="Michael T."
                role="Software Engineer"
                rating={5}
              />
            </FadeIn>
            <FadeIn>
              <TestimonialCard
                quote="The AI suggestions were spot on. I was able to customize my resume for each job in minutes instead of hours."
                author="Jessica M."
                role="Project Manager"
                rating={4}
              />
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}

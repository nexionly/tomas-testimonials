
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-testimonial-bg px-4">
      <h1 className="text-3xl md:text-4xl font-light text-center mb-12 text-testimonial-text animate-fade-in">
        What people say about me
      </h1>
      <TestimonialCarousel />
    </div>
  );
};

export default Index;

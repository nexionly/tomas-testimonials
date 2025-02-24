
import { TestimonialGrid } from "@/components/TestimonialGrid";

const Index = () => {
  return (
    <div className="min-h-screen py-12 bg-testimonial-bg px-4">
      <h1 className="text-3xl md:text-4xl font-light text-center mb-12 text-testimonial-text animate-fade-in">
        What people say about me
      </h1>
      <TestimonialGrid />
    </div>
  );
};

export default Index;

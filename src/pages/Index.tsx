
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-purple-200 via-pink-300 to-fuchsia-100 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-block">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg mb-6">
            <img
              src="/lovable-uploads/66077cff-2f53-4580-98ed-7cadef33384b.png"
              alt="Tomas"
              className="object-cover"
            />
          </Avatar>
        </div>
        <h1 className="text-3xl md:text-4xl font-light text-center text-testimonial-text animate-fade-in">
          What people say about Tomas
        </h1>
        <div className="mt-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <Button
            variant="secondary"
            className="gap-2 bg-white hover:bg-gray-50 text-blue-600 font-medium shadow-md"
            onClick={() => window.open('https://www.linkedin.com/in/tomaswilliamsa/', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
      <TestimonialGrid />
    </div>
  );
};

export default Index;

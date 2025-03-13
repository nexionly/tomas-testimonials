
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        
        <div className="container mx-auto py-20 lg:py-32 px-6 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-playfair leading-tight">
                What people say about <span className="text-purple-600">Tomas</span>
              </h1>
              
              <p className="text-xl text-gray-700 max-w-2xl font-montserrat font-light">
                Words from colleagues and clients that have worked with me over the years
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  variant="default"
                  className="gap-2 bg-purple-600 hover:bg-purple-700 font-montserrat shadow-md"
                  onClick={() => window.open('https://www.linkedin.com/in/tomaswilliamsa/', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-b from-purple-100 to-pink-100">
                  <img
                    src="./lovable-uploads/3360f130-d3b1-4198-82ae-66378c7e01e2.png"
                    alt="Tomas"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="pt-4 pb-20">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-semibold text-center font-playfair text-gray-800 mb-4">Testimonials</h2>
          <p className="text-center text-gray-600 font-montserrat max-w-2xl mx-auto">
            Here's what colleagues and clients have to say about working with me
          </p>
        </div>
        
        <TestimonialGrid />
      </div>
    </div>
  );
};

export default Index;

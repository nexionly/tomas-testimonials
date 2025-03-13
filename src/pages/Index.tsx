
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#ff69b4]"> {/* Hot pink background like mattegreenmedia.com */}
      {/* Hero Section */}
      <div className="container mx-auto py-20 px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          {/* Logo/Icon */}
          <div className="mb-8">
            <img 
              src="./lovable-uploads/963b3a99-2e94-4c42-98ba-915be1391cd1.png" 
              alt="Logo" 
              className="w-24 h-24"
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-playfair leading-tight max-w-4xl mx-auto mb-8">
            Building Exceptional Customer Experiences for Series-A Founders
          </h1>
          
          {/* Profile Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="./lovable-uploads/b21f2d70-7487-4549-bb5c-5f61330deb54.png"
                alt="Tomas"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* LinkedIn Button */}
          <div className="flex justify-center">
            <Button
              variant="default"
              className="gap-2 bg-white text-[#ff69b4] hover:bg-gray-100 font-montserrat shadow-md"
              onClick={() => window.open('https://www.linkedin.com/in/tomaswilliamsa/', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
        
        {/* Site URL Display - similar to mattegreenmedia.com */}
        <div className="flex justify-center items-center mb-16">
          <div className="flex items-center">
            <div className="w-8 h-8 mr-3">
              <img 
                src="./lovable-uploads/963b3a99-2e94-4c42-98ba-915be1391cd1.png" 
                alt="Logo" 
                className="w-full h-full"
              />
            </div>
            <span className="text-white text-xl font-montserrat">yourwebsite.com</span>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="py-12 pb-20 bg-white rounded-t-3xl">
        <div className="container mx-auto px-6 mb-12 pt-8">
          <h2 className="text-3xl font-semibold text-center font-playfair text-gray-800 mb-8">What people say about Tomas</h2>
        </div>
        
        <TestimonialGrid />
      </div>
    </div>
  );
};

export default Index;

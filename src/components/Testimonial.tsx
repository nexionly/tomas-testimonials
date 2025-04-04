
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { MessageSquareQuote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
  style?: React.CSSProperties;
  colorVariant?: "purple" | "blue" | "pink" | "default";
}

export const Testimonial = ({
  quote,
  author,
  role,
  className,
  style,
  colorVariant = "default",
}: TestimonialProps) => {
  // Color variants for testimonial backgrounds
  const colorVariants = {
    purple: "bg-gradient-to-br from-purple-100/90 to-indigo-100/90 border-purple-200/50",
    blue: "bg-gradient-to-br from-blue-100/90 to-indigo-100/90 border-blue-200/50",
    pink: "bg-gradient-to-br from-pink-100/90 to-purple-100/90 border-pink-200/50",
    default: "bg-white/90 border-gray-200/50",
  };

  return (
    <Card
      className={cn(
        "relative p-8 rounded-lg backdrop-blur-sm text-gray-800 hover:shadow-lg transition-all duration-500 flex flex-col border shadow hover:-translate-y-1",
        colorVariants[colorVariant],
        className
      )}
      style={style}
    >
      <div className="absolute -top-3 -left-3 text-purple-500 opacity-40">
        <MessageSquareQuote size={28} />
      </div>
      
      <div className="flex flex-col h-full">
        <p className="text-lg font-light leading-relaxed mb-6 flex-grow font-montserrat italic pt-2">
          "{quote}"
        </p>
        <div className="space-y-1 mt-auto pt-4 border-t border-gray-200/50">
          <p className="font-medium text-lg font-montserrat">{author}</p>
          <p className="text-sm text-gray-600 font-montserrat">{role}</p>
        </div>
      </div>
    </Card>
  );
};

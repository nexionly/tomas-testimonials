
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Testimonial = ({
  quote,
  author,
  role,
  className,
  style,
}: TestimonialProps) => {
  return (
    <Card
      className={cn(
        "relative p-8 rounded-lg bg-white/90 backdrop-blur-sm text-gray-800 hover:shadow-lg transition-all duration-500 flex flex-col border border-gray-200/50 shadow hover:-translate-y-1",
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <p className="text-lg font-light leading-relaxed mb-6 flex-grow font-montserrat italic">
          "{quote}"
        </p>
        <div className="space-y-1 mt-auto pt-4 border-t border-gray-200">
          <p className="font-medium text-lg font-montserrat">{author}</p>
          <p className="text-sm text-gray-600 font-montserrat">{role}</p>
        </div>
      </div>
    </Card>
  );
};

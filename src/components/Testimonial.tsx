
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
        "relative p-8 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 flex flex-col border-0",
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <p className="text-lg font-light leading-relaxed mb-6 flex-grow font-montserrat">
          "{quote}"
        </p>
        <div className="space-y-1 mt-auto pt-4 border-t border-gray-100">
          <p className="font-medium text-lg font-montserrat">{author}</p>
          <p className="text-sm text-gray-600 font-montserrat">{role}</p>
        </div>
      </div>
    </Card>
  );
};

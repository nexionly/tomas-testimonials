
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
  isVisible?: boolean;
}

export const Testimonial = ({
  quote,
  author,
  role,
  className,
  isVisible = true,
}: TestimonialProps) => {
  return (
    <Card
      className={cn(
        "relative p-8 rounded-2xl bg-testimonial-bg text-testimonial-text max-w-3xl mx-auto transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      <div className="space-y-4">
        <p className="text-xl md:text-2xl font-light italic leading-relaxed">
          {quote}
        </p>
        <div className="space-y-1">
          <p className="font-medium text-lg">{author}</p>
          <p className="text-sm opacity-80">{role}</p>
        </div>
      </div>
    </Card>
  );
};

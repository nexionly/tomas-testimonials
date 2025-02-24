
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
        "relative p-6 rounded-2xl bg-testimonial-bg text-testimonial-text hover:shadow-lg transition-all duration-300 flex flex-col",
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <p className="text-lg font-light italic leading-relaxed mb-4 flex-grow">
          {quote}
        </p>
        <div className="space-y-1 mt-auto">
          <p className="font-medium text-lg">{author}</p>
          <p className="text-sm opacity-80">{role}</p>
        </div>
      </div>
    </Card>
  );
};
